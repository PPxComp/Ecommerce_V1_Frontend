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
    setTimeout(() => {
      dispatch(setStateToSuccess("ok"));
      history.push("/stock");
    }, 1000);
  };
};
