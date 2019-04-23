import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import * as actionTypes from "./Types";
import { getDevices } from "./deviceActions";
import { setErrors } from "./errors";
import { NavigationActions } from "react-navigation";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const setAuthToken = async token => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = navigation => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = await jwt_decode(token);
      if (user.exp >= currentTime) {
        await setAuthToken(token);
        await dispatch(setCurrentUser(user));
        navigation.navigate(
          "DeviceStack",
          {},
          NavigationActions.navigate({ Home: "Home" })
        );
        await dispatch(getDevices());
      } else {
        dispatch(logout(navigation));
      }
    }
  };
};
const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("user/login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);

      await setAuthToken(user.token);
      await dispatch(setCurrentUser(decodedUser));
      await dispatch(getDevices());

      navigation.navigate(
        "DeviceStack",
        {},
        NavigationActions.navigate({ Home: "Home" })
      );
    } catch (error) {
      dispatch(setErrors(error));
      console.log(error);
      alert("Wrong ID or Password");
    }
  };
};
export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("customer/register/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      await setAuthToken(user.token);
      await dispatch(setCurrentUser(decodedUser));
      await dispatch(getDevices());
      navigation.navigate(
        "DeviceStack",
        {},
        NavigationActions.navigate({ Home: "Home" })
      );
    } catch (error) {
      dispatch(setErrors(error));
      console.log(error);
      alert("ID Exist ");
    }
  };
};

export const logout = navigation => {
  setAuthToken();
  return async dispatch => {
    try {
      dispatch(setCurrentUser());
      navigation.navigate(
        "AuthStack",
        {},
        NavigationActions.navigate({ Login: "Login" })
      );
    } catch {}
  };
};
