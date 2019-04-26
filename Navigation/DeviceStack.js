import React from "react";
import { createStackNavigator } from "react-navigation";
import { Text } from "react-native";
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
      backgroundColor: "transparent",
      borderRadius: 8
    },
    defaultNavigationOptions: {
      headerTintColor: "#00F7EA",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);

export default DeviceStack;
