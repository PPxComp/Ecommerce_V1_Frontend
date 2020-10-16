const initialState = {
  result: null,
  isFetching: false,
  error: false,
  isAuthenticated: false,
  isAdmin: false,
  user: "",
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
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
