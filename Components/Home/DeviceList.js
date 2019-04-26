import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { ListItem, Text, Right, Icon, Left, Body } from "native-base";
class DeviceList extends React.Component {
  render() {
    let device = this.props.device;
    return (
      <>
        {device.is_alerted ? (
          <ListItem
            noIndent
            style={{ backgroundColor: "transparnt" }}
            onPress={() =>
              this.props.navigation.navigate("DeviceDetail", { device: device })
            }
          >
            <Left>
              <Icon
                name="mobile"
                type="Entypo"
                style={{ color: "#f1c601", marginRight: 10 }}
              />
              <Text style={{ color: "#f1c601", fontWeight: "700" }}>
                {device.iemi_id}
              </Text>
            </Left>

            <Right>
              <Icon
                name="exclamationcircle"
                type="AntDesign"
                style={{ color: "#f1c601" }}
              />
            </Right>
          </ListItem>
        ) : (
          <ListItem
            // style={{ backgroundColor: "#B8D0EB" }}
            style={{
              backgroundColor: "transparnt"
            }}
            last
            onPress={() =>
              this.props.navigation.navigate("DeviceDetail", { device: device })
            }
          >
            <Left>
              <Icon
                name="mobile"
                type="Entypo"
                style={{ marginRight: 10, color: "#00F7EA" }}
              />
              <Text style={{ color: "#00F7EA", fontWeight: "700" }}>
                {device.iemi_id}
              </Text>
            </Left>

            <Right>
              <Icon
                name="ios-arrow-forward"
                type="Ionicons"
                style={{ color: "#00F7EA" }}
              />
            </Right>
          </ListItem>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeviceList)
);
