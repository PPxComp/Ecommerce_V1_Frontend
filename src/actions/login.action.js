import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
export const setStateToFetching = () => ({
  type: "LOGIN_FETCHING",
});

export const setStateToSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});

export const setStateToFailed = (payload) => ({
  type: "LOGIN_FAILED",
  payload,
});

export const setStateToLogout = () => ({
  type: "LOGOUT",
});

export const setCurrentUser = (payload) => ({
  type: "SET_CURRENT_USER",
  payload,
});

export const setStateAdmin = (payload) => ({
  type: "SET_ADMIN",
  payload,
});
export const setAdmin = (payload) => {
  return (dispatch) => {
    dispatch(setStateAdmin(payload));
  };
};
export const login = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setStateToFetching());
    const data = {
      username,
      password,
    };
    try {
      const result = await axios.post(
        "http://localhost:9000/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          withCredentials: true,
        }
      );
      // console.log(result.data);
      localStorage.setItem("accessToken", result.data.accessToken);

      setAuthorizationToken(result.data.accessToken);
      const result2 = await axios.get("http://localhost:9000/user/me", {
        headers: {
          Authorization: `Bearer ${result.data.accessToken}`,
        },
      });
      localStorage.setItem("isAdmin", result2.data.isAdmin);
      dispatch(setStateAdmin(result2.data.isAdmin));
      dispatch(setStateToSuccess(result.data.message));
      if (result2.data.isAdmin) {
        history.push("/editstock");
      } else {
        history.push("/stock");
      }
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        dispatch(setStateToFailed(error.response.data.message));
        console.log(error.response.data);
      }
    }
  };
};

export const hasError = (payload) => {
  return (dispatch) => {
    dispatch(setStateToFailed(payload));
  };
};

export const logout = ({ history }) => {
  return async (dispatch) => {
    dispatch(setStateToLogout());

    try {
      // const result = await axios.post("http://localhost:9000/auth/logout", {
      //   headers: {
      //     "Content-Type": "application/json;charset=UTF-8",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Credentials": true,
      //     Accept: "application/json",
      //     "X-Requested-With": "XMLHttpRequest",
      //   },
      //   withCredentials: true,
      // });
      const res = await axios.post("http://localhost:9000/auth/logout", null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers":
            "access-control-allow-credentials,access-control-allow-origin,content-type,x-requested-with",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        withCredentials: true,
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAdmin");
      // console.log(res);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
