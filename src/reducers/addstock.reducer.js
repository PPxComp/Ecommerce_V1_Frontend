const initialState = {
  result: null,
  isFetching: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_STOCK_FETCHING":
      return { ...state, isFetching: true, error: false, result: null };
    case "ADD_STOCK_FAILED":
      return { ...state, isFetching: false, error: true, result: payload };
    case "ADD_STOCK_SUCCESS":
      return { ...state, isFetching: false, error: false, result: payload };
    default:
      return state;
  }
};
