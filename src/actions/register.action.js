// import axios from "axios";
export const setStateToFetching = () => ({
  type: "REGISTER_FETCHING",
});

export const setStateToSuccess = (payload) => ({
  type: "REGISTER_SUCCESS",
  payload,
});

export const setStateToFailed = (payload) => ({
  type: "REGISTER_FAILED",
  payload,
});

export const register = ({ username, password, history }) => {
  return async (dispatch) => {
    dispatch(setStateToFetching());
    setTimeout(() => {
      dispatch(setStateToSuccess("ok"));
      history.push("/stock");
    }, 1000);
  };
};

export const hasError = (payload) => {
  return (dispatch) => {
    dispatch(setStateToFailed(payload));
  };
};
