import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
// NativeBase Components
import { Text, Icon } from "native-base";
class DeviceID extends React.Component {
  handleLogout = () => {};

  render() {
    const device = this.props.navigation.getParam("device");
    return (
      <>
        <Icon
          name="mobile"
          type="Entypo"
          style={{ marginRight: 10, color: "#fff", fontSize: 17 }}
        />
        <Text style={{ color: "#fff", fontWeight: "400" }}>
          {device.iemi_id}
        </Text>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(actions.logout(navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceID);
