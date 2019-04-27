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
                style={{
                  color: "#f1c601",
                  marginRight: 10,
                  fontSize: 40,
                  width: 40
                }}
              />
              <Text
                style={{ color: "#f1c601", fontWeight: "700", fontSize: 20 }}
              >
                {device.iemi_id}
              </Text>
            </Left>

            <Right>
              <Icon
                name="exclamationcircle"
                type="AntDesign"
                style={{ color: "#f1c601", fontSize: 30 }}
              />
            </Right>
          </ListItem>
        ) : (
          <ListItem
            // style={{ backgroundColor: "#B8D0EB" }}
            style={{
              backgroundColor: "transparnt",
              fontSize: 100
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
                style={{
                  marginRight: 10,
                  color: "#00F7EA",
                  fontSize: 40,
                  width: 40
                }}
              />
              <Text
                style={{
                  paddingLeft: 0,
                  color: "#00F7EA",
                  fontWeight: "700",
                  fontSize: 20
                }}
              >
                {device.iemi_id}
              </Text>
            </Left>

            <Right>
              <Icon
                name="ios-arrow-forward"
                type="Ionicons"
                style={{ color: "#00F7EA", fontSize: 30 }}
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
