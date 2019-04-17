import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "../Components/Login";
import Home from "../Components/Home";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Home: Home
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