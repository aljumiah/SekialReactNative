import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Logout from "../Logout";
import DeviceList from "./DeviceList";
// NativeBase Components
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
class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Home",
    headerRight: <Logout navigation={navigation} />
  });

  render() {
    const showDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));
    return (
      <Content>
        <Separator style={{ backgroundColor: "#f5f5f5" }}>
          <Text style={{ color: "#000" }}>DEVICES YOU OWN </Text>
        </Separator>
        {showDevices}
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user,
  devices: state.devicesReducer.devices
});
const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(actions.logout(navigation)),
  checkForExpiredToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
