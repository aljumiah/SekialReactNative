import React from "react";
import { View, Text } from "react-native";
import AppContainer from "../../Navigation";
// NativeBase Components
import { Button } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.replace("Home")}
        >
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}
