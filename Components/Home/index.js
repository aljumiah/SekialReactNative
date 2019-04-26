import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Logout from "../Logout";
import DeviceList from "./DeviceList";
import { LinearGradient } from "expo";
import UserInfo from "./UserInfo";
// NativeBase Components
import { Content, Text, Separator } from "native-base";
class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackground: (
      <LinearGradient
        colors={["#042630", "#0f7383"]}
        style={{ flex: 1 }}
        start={[1, 1]}
        end={[1, 0]}
      />
    ),
    headerTitle: <UserInfo navigation={navigation} />,
    headerRight: <Logout navigation={navigation} />
  });

  render() {
    const showDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));
    return (
      <LinearGradient
        colors={["#0f7383", "#042630"]}
        style={{ flex: 1 }}
        start={[1, 1]}
        end={[1, 0]}
      >
        <Content>
          <Separator style={{ backgroundColor: "#f5f5f5" }}>
            <Text style={{ color: "#000" }}>DEVICES YOU OWN </Text>
          </Separator>
          {showDevices}
        </Content>
      </LinearGradient>
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
