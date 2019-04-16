import React from "react";
import { View, Text } from "react-native";
// NativeBase Components
import { Button } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("DeviceDetail")}
        >
          <Text>Go to Device</Text>
        </Button>
      </View>
    );
  }
}
