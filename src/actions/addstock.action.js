import axios from "axios";
import { storage } from "../firebase/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";

export const setStateToSuccess = (payload) => ({
  type: "ADD_STOCK_SUCCESS",
  payload,
});

export const setStateToFailed = (payload) => ({
  type: "ADD_STOCK_FAILED",
  payload,
});

export const setStateToFetching = () => ({
  type: "ADD_STOCK_FETCHING",
});
export const setStateDefaultNoti = () => ({
  type: "ADD_STOCK_DEFAULT_NOTI",
});

export const addStock = ({
  name,
  price,
  count,
  description,
  catagory,
  image,
}) => {
  return async (dispatch) => {
    const data = {
      name,
      price,
      count,
      description,
      catagory,
    };
    try {
      dispatch(setStateToFetching());
      const result = await axios.post("http://localhost:9000/stock", data, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
      });
      // // console.log(result.data);
      const { uid } = jwt_decode(localStorage.getItem("firebaseToken"));
      const uploadTask = storage.ref(`img/${result.data._id}`).put(image);
      // console.log(uid);
      if (uid === "admin") {
        await firebase
          .auth()
          .signInWithCustomToken(localStorage.getItem("firebaseToken"))
          .then(function (data) {
            uploadTask.on("state_changed");
          });
        // await firebase.auth().signOut();
        dispatch(setStateToSuccess("Add stock complete!"));
      } else {
        throw new Error("uid");
      }
    } catch (error) {
      console.log(error);
      if (error === "uid") {
        dispatch(setStateToFailed("You don't have permission"));
      }
      if (error.response) {
        if (error.response.data.statusCode === 400) {
          dispatch(setStateToFailed(error.response.data.message));
        }
        if (error.response.data.statusCode === 401) {
          dispatch(setStateToFailed(error.response.data.message));
        }
      }
    }
  };
};
