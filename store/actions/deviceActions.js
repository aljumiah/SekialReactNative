import axios from "axios";
import * as actionTypes from "./Types";

export const getDevices = token => {
  return async dispatch => {
    dispatch(setDeviceLoading());

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

export const setDeviceLoading = () => ({
  type: actionTypes.DEVICE_LOADING
});
