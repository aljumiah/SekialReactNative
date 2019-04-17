import React from "react";
import { createStackNavigator } from "react-navigation";

import DeviceDetail from "../Components/DeviceDetail";
import Home from "../Components/Home";

const AuthStack = createStackNavigator(
  {
    Home: Home,
    DeviceDetail: DeviceDetail
  },
  {
    initialRouteName: "Home",
    cardStyle: {
      backgroundColor: "#b2b2b2"
    },
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "#373738",
        color: "red"
      }
    }
  }
);

export default AuthStack;
