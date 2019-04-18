import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Logout from "../Logout";
import DeviceList from "./DeviceList";
// NativeBase Components
import {
  Button,
  Container,
  Header,
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
        <Separator style={{ backgroundColor: "#f5f5f5" }} bordered>
          <Text style={{ color: "#000" }}>YOUR DEVICE</Text>
        </Separator>
        <ListItem noIndent style={{ backgroundColor: "#FFD07E" }}>
          <Left>
            <Icon name="mobile" type="Entypo" style={{ color: "#000" }} />
          </Left>
          <Body>
            <Text>IEMI:</Text>
          </Body>
          <Right>
            <Icon
              name="exclamationcircle"
              type="AntDesign"
              style={{ color: "#F7021C" }}
            />
          </Right>
        </ListItem>
        <ListItem
          noIndent
          style={{ backgroundColor: "#B6D7B9" }}
          onPress={() => this.props.navigation.navigate("DeviceDetail")}
        >
          <Left>
            <Icon name="mobile" type="Entypo" style={{ color: "#000" }} />
          </Left>
          <Body>
            <Text style={{ color: "#fff" }}>IEMI</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" style={{ color: "#229c91" }} />
          </Right>
        </ListItem>
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
  getDevices: () => dispatch(actions.getDevices())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
