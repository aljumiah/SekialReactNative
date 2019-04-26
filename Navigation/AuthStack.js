import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "../Components/Login";
import Signup from "../Components/Signup";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "transparent"
    },
    headerMode: "none",
    defaultNavigationOptions: {
      navigationOptions: {
        headerVisible: false
      }
    }
  }
);

export default AuthStack;
