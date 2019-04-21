import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import * as actionTypes from "./Types";
import { getDevices } from "./deviceActions";

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
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        setAuthToken(token);

        dispatch(setCurrentUser(user));
        dispatch(getDevices());

        navigation.replace("Home");
      } else {
        dispatch(logout());
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
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      dispatch(getDevices());
    } catch (error) {
      console.error(error);
    }
  };
};
export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await instance.post("customer/register/", userData);
      dispatch(login(userData));
      navigation.replace("Home");
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = navigation => {
  setAuthToken();
  return async dispatch => {
    try {
      dispatch(setCurrentUser());
      navigation.replace("Login");
    } catch {}
  };
};
