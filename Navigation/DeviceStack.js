import React from "react";
import { createStackNavigator } from "react-navigation";

import DeviceDetail from "../Components/DeviceDetail";
import Home from "../Components/Home";
import TransfareOwner from "../Components/TransfareOwner";

const DeviceStack = createStackNavigator(
  {
    Home: Home,
    DeviceDetail: DeviceDetail,
    TransfareOwner: TransfareOwner
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

export default DeviceStack;
