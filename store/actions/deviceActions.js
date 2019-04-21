import axios from "axios";
import * as actionTypes from "./Types";
import { AsyncStorage } from "react-native";

export const getDevices = () => {
  return async dispatch => {
    dispatch(setDeviceLoading());
    const token = await AsyncStorage.getItem("token");
    try {
      const res = await axios.get("http://127.0.0.1:8000/device/list/", {
        headers: { Authorization: `JWT ${token}` }
      });
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
    const Mytoken = await AsyncStorage.getItem("token");
    console.log("MyTOKEN", Mytoken);
    try {
      console.log("NEW USER", user);

      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user,
        {
          headers: { Authorization: `JWT ${Mytoken}` }
        }
      );

      const newOwner = res.data;
      console.log("NEW Owner", newOwner);
      // console.log("navigation", navigation);
      alert("Device has been transfared succesfully");
      //navigation.goBack();
      dispatch(getDevices());
      dispatch({
        type: actionTypes.TRANSFARE_OWNER,
        payload: newOwner
      });
      navigation.navigate("Home");
    } catch (err) {
      console.error("Error while TRANSFARE_OWNERs", err);
    }
  };
};

export const changeAlertStatus = (user, deviceID, navigation) => {
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
      navigation.goBack();
    } catch (err) {
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const setDeviceLoading = () => ({
  type: actionTypes.DEVICE_LOADING
});
