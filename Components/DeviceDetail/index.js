import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { withNavigation } from "react-navigation";
class DeviceDetail extends React.Component {
  static navigationOptions = {
    title: "Detail"
    // headerLeft: (
    //   <Text
    //     bordered
    //     onPress={() => this.props.navigation.goBack()}
    //     title="Info"
    //     color="#fff"
    //     style={{ paddingLeft: 20, fontSize: 16 }}
    //   >
    //     Back
    //   </Text>
    // )
  };
  render() {
    return (
      <View>
        <Text>DevicesDevicesDevicesDevicesDevicesDevicesDevices</Text>
      </View>
    );
  }
}

export default withNavigation(DeviceDetail);
