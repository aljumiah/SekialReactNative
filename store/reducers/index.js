import { combineReducers } from "redux";

import authReducer from "./authReducer";
import devicesReducer from "./devicesReducer";
import errorReducer from "./errors";

export default combineReducers({
  authReducer: authReducer,
  devicesReducer: devicesReducer,
  errorReducer: errorReducer
});
