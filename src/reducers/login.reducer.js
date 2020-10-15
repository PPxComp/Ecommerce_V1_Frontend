const initialState = {
  result: null,
  isFetching: false,
  error: false,
  isAuthenticated: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_FETCHING":
      return { ...state, isFetching: true, error: false, result: null };
    case "LOGIN_FAILED":
      return {
        ...state,
        isFetching: false,
        error: true,
        result: payload,
        isAuthenticated: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
        result: payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return "initialState";
    default:
      return state;
  }
};
