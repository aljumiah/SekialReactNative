import { combineReducers } from "redux";

import authReducer from "./authReducer";
import devicesReducer from "./devicesReducer";

export default combineReducers({
  authReducer: authReducer,
  devicesReducer: devicesReducer
});
