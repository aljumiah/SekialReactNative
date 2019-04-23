import axios from "axios";
import * as actionTypes from "./Types";
import { AsyncStorage } from "react-native";

export const getDevices = () => {
  return async dispatch => {
    dispatch(setDeviceLoading());

    try {
      const res = await axios.get("http://127.0.0.1:8000/device/list/");
      const devices = res.data;

      dispatch({
        type: actionTypes.FETCH_DEVICES,
        payload: devices
      });
    } catch (err) {
      console.error("Error while fetching devices", err);
    }
  };
};

export const transfareUser = (user, deviceID, navigation) => {
  return async dispatch => {
    dispatch(setDeviceLoading());
    //const Mytoken = await AsyncStorage.getItem("token");
    console.log(
      "AUTH transfareuser:",
      axios.defaults.headers.common.Authorization
    );
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newOwner = res.data;
      console.log("NEW Owner", newOwner);
      dispatch(getDevices());
      dispatch({
        type: actionTypes.TRANSFARE_OWNER,
        payload: newOwner
      });
      alert(`Device has been transfared succesfully to ${newOwner.user}`);
      navigation.navigate("Home", { navigation: navigation });
    } catch (err) {
      alert("this user does not exist");
      // console.error("Error while TRANSFARE_OWNERs", err);
    }
  };
};

export const changeAlertStatusTrue = (user, deviceID, navigation) => {
  return async dispatch => {
    console.log("user all", user);
    console.log("deviceID", deviceID);
    console.log("token", axios.defaults.headers.common.Authorization);
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newOwner = res.data;
      alert(`Alert has been changed to ${newOwner.is_alerted}`);
      dispatch(getDevices());
      navigation.navigate("Home");
    } catch (err) {
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const changeAlertStatusFalse = (user, deviceID, navigation) => {
  return async dispatch => {
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
      alert(`Alert has been changed to ${newOwner.is_alerted}`);
      dispatch(getDevices());
      navigation.navigate("Home");
    } catch (err) {
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const setDeviceLoading = () => ({
  type: actionTypes.DEVICE_LOADING
});
