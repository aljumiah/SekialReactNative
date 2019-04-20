import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  View,
  Right,
  Icon,
  Left,
  Body,
  TouchableOpacity
} from "native-base";
import { withNavigation } from "react-navigation";
class DeviceDetail extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };
  render() {
    const { navigation } = this.props;
    const device = navigation.getParam("device");
    return (
      <>
        {device.is_alerted ? (
          <Content>
            <Button full warning>
              <Text>Remove Alert</Text>
            </Button>
          </Content>
        ) : (
          <Content>
            <Button full success>
              <Text>Transfare Ownership</Text>
            </Button>
            <Button full danger>
              <Text>Alert</Text>
            </Button>
          </Content>
        )}
      </>
    );
  }
}

export default withNavigation(DeviceDetail);
