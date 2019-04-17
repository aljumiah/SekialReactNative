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
      backgroundColor: "#b2b2b2"
    },
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "#373738"
      }
    }
  }
);

export default AuthStack;
