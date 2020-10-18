import axios from "axios";
import { storage } from "../firebase/firebase";

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
      console.log(result.data);
      // const uploadTask = storage.ref(`images/reusu`).put(image);
      // uploadTask.on(
      //   "state_changed",
      //   (error) => {
      //     console.log(error);
      //   },
      //   () => {
      //     storage
      //       .ref("images")
      //       .child(image.name)
      //       .getDownloadURL()
      //       .then((url) => {
      //         console.log(url);
      //       });
      //   }
      // );
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === 400) {
        //didn,t have permission
        dispatch(setStateToFailed(error.response.data.message));
        console.log(error.response.data);
      }
      if (error.response.data.statusCode === 401) {
        dispatch(setStateToFailed(error.response.data.message));
        console.log(error.response.data); // unautherized
      }
    }
  };
};
