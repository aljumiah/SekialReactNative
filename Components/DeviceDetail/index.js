import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
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
  state = {
    id: null,
    user: null,
    is_alerted: null
  };
  async componentDidMount() {
    const device = this.props.navigation.getParam("device");
    await this.setState({ id: device.id, user: device.user.username });
    console.log(`device id: ${device.id} | user:${device.user}`);
  }
  async removeAlert() {
    await this.setState({ is_alerted: false });
    this.handleSubmitRemove();
  }
  async addAlert() {
    await this.setState({ is_alerted: true });
    this.handleSubmitAdd();
  }
  handleSubmitAdd = () => {
    this.props.changeAlertStatusTrue(
      this.state,
      this.state.id,
      this.props.navigation
    );
  };
  handleSubmitRemove = () => {
    this.props.changeAlertStatusFalse(
      this.state,
      this.state.id,
      this.props.navigation
    );
  };
  static navigationOptions = {
    title: ""
  };
  render() {
    const { navigation } = this.props;
    const device = navigation.getParam("device");
    return (
      <>
        {device.is_alerted ? (
          <Content>
            <Button full warning onPress={() => this.removeAlert()}>
              <Text>Remove Alert</Text>
            </Button>
          </Content>
        ) : (
          <Content>
            <Button
              full
              success
              onPress={() =>
                this.props.navigation.navigate("TransfareOwner", {
                  device: device
                })
              }
            >
              <Text>Transfare Ownership</Text>
            </Button>
            <Button full danger onPress={() => this.addAlert()}>
              <Text>Alert</Text>
            </Button>
          </Content>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeAlertStatusTrue: (user, deviceID, navigation) =>
    dispatch(actions.changeAlertStatusTrue(user, deviceID, navigation)),
  changeAlertStatusFalse: (user, deviceID, navigation) =>
    dispatch(actions.changeAlertStatusFalse(user, deviceID, navigation))
});
export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(DeviceDetail)
);
