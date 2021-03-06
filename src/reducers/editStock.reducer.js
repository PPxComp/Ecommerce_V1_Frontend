const initialState = {
    result: null,
    isFetching: false,
    error: false,
    notification: false,
    success: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "EDIT_STOCK_FETCHING":
        return {
          ...state,
          isFetching: true,
          error: false,
          result: null,
          notification: false,
        };
      case "EDIT_STOCK_FAILED":
        return {
          ...state,
          isFetching: false,
          error: true,
          result: payload,
          notification: true,
        };
      case "EDIT_STOCK_SUCCESS":
        return {
          ...state,
          isFetching: false,
          error: false,
          result: payload,
          notification: true,
          success: true,
        };
      case "EDIT_STOCK_DEFAULT_NOTI":
        return {
          ...state,
          isFetching: false,
          error: false,
          result: payload,
          notification: true,
          success: false,
        };
      default:
        return state;
    }
  };
  