import axios from "axios";
import * as actionTypes from "./Types";
import { AsyncStorage } from "react-native";
import { resetError } from "./errors";
export const getDevices = () => {
  return async dispatch => {
    dispatch(setDeviceLoading(true));
    dispatch(resetError());
    try {
      const res = await axios.get("http://127.0.0.1:8000/device/list/");
      const devices = res.data;

      dispatch({
        type: actionTypes.FETCH_DEVICES,
        payload: devices
      });
    } catch (err) {
      dispatch(resetError());
      console.error("Error while fetching devices", err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

export const transfareUser = (user, deviceID, navigation) => {
  return async dispatch => {
    console.log(
      "AUTH transfareuser:",
      axios.defaults.headers.common.Authorization
    );
    dispatch(setDeviceLoading(true));
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newOwner = res.data;
      console.log("NEW Owner", newOwner);
      dispatch(setDeviceLoading(false));
      dispatch(getDevices());
      dispatch({
        type: actionTypes.TRANSFARE_OWNER,
        payload: newOwner
      });
      alert(`Device has been transfared succesfully to ${newOwner.user}`);
      navigation.navigate("Home", { navigation: navigation });
    } catch (err) {
      dispatch(resetError());
      dispatch(setDeviceLoading(false));
      console.log("Error while TRANSFARE_OWNERs", err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};
export const setDeviceLoading = value => ({
  type: actionTypes.DEVICE_LOADING,
  payload: value
});
export const changeAlertStatusTrue = (user, deviceID, navigation) => {
  return async dispatch => {
    dispatch(setDeviceLoading(true));
    console.log("user all", user);
    console.log("deviceID", deviceID);
    console.log("token", axios.defaults.headers.common.Authorization);
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newOwner = res.data;
      alert(
        `Device status with ${newOwner.iemi_id} iemi has been changed to Lost`
      );
      dispatch(getDevices());
      navigation.navigate("Home");
    } catch (err) {
      dispatch(resetError());
      dispatch(setDeviceLoading(false));
      console.error("Error while changeding Alert Status", err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

export const changeAlertStatusFalse = (user, deviceID, navigation) => {
  return async dispatch => {
    dispatch(resetError());
    dispatch(setDeviceLoading(true));
    const Mytoken = await AsyncStorage.getItem("token");
    console.log("MyTOKEN", Mytoken);
    try {
      console.log("NEW Status Alert", user);

      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user,
        {
          headers: { Authorization: `JWT ${Mytoken}` }
        }
      );

      const newOwner = res.data;
      console.log("Status", newOwner);
      alert(`Alert with ${newOwner.iemi_id} iemi has been removed `);
      dispatch(getDevices());
      navigation.navigate("Home");
    } catch (err) {
      dispatch(resetError());
      dispatch(setDeviceLoading(false));
      console.error("Error while changeding Alert Status", err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};
