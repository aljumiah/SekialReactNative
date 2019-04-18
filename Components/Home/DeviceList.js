import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

// NativeBase Components
import { ListItem, Text, Right, Icon, Left, Body } from "native-base";
class DeviceList extends React.Component {
  render() {
    let device = this.props.device;
    return (
      <ListItem
        style={{ backgroundColor: "#B8D0EB" }}
        last
        onPress={() => this.props.navigation.navigate("DeviceDetail")}
      >
        <Left>
          <Icon name="mobile" type="Entypo" />
        </Left>
        <Body>
          <Text>{device.iemi_id}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" style={{ color: "#2B8FFF" }} />
        </Right>
      </ListItem>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceList);
