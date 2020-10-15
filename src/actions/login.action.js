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
            withwithCredentials: true,
          },
        }
      );
      console.log(result.data);
      localStorage.setItem("accessToken", result.data.accessToken);
      setAuthorizationToken(result.data.accessToken);
      dispatch(setStateToSuccess(result.data.message));
      history.push("/");
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

export const logout = () => {
  return (dispatch) => {
    dispatch(setStateToLogout());
    localStorage.removeItem("accessToken");
  };
};
