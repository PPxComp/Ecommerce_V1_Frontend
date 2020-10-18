import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import addStockReducer from "./addstock.reducer";
export default combineReducers({
  loginReducer,
  registerReducer,
  addStockReducer,
});
