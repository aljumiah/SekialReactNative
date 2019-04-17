import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Home from "../Components/Home";

const AuthStack = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "#fff"
    },
    defaultNavigationOptions: {
      header: null,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
