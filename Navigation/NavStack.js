import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";
import AuthStack from "../Navigation/AuthStack";
import DeviceStack from "./DeviceStack";
// import Device from "./../Components/DeviceDetail";

// const BottomTab = createBottomTabNavigator({
//   Home: HomeStack
// });

// const BottomTab = createDrawerNavigator({
//   Home: {
//     screen: HomeStack
//   },
//   Devices: {
//     screen: DevicesStack
//   }
// });
const NavStack = createStackNavigator(
  {
    AuthStack: AuthStack,
    DeviceStack: DeviceStack
  },
  {
    initialRouteName: "AuthStack",
    defaultNavigationOptions: {
      header: null
    }
  }
);
export default NavStack;
