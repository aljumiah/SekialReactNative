import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";
import AuthStack from "../Navigation/AuthStack";
import DeviceDetail from "../Components/DeviceDetail";
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
    DeviceDetail: DeviceDetail
  },
  {
    initialRouteName: "AuthStack"
  }
);
export default NavStack;
