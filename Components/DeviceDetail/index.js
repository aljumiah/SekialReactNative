import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {
  Button,
  Content,
  Text,
  Spinner,
  List,
  Icon,
  Right,
  Left,
  Body
} from "native-base";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo";
import DeviceID from "./DeviceID";

class DeviceDetail extends React.Component {
  state = {
    id: null,
    user: null,
    is_alerted: null
  };
  async componentDidMount() {
    const device = this.props.navigation.getParam("device");
    await this.setState({ id: device.id, user: device.user.username });
    console.log(`device id: ${device.id} | device:${device.iemi_id}`);
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

  static navigationOptions = ({ navigation }) => ({
    headerBackground: (
      <LinearGradient
        colors={["#042630", "#0f7383"]}
        style={{ flex: 1 }}
        start={[1, 1]}
        end={[1, 0]}
      />
    ),
    headerTitle: <DeviceID navigation={navigation} />
  });

  render() {
    const { navigation } = this.props;
    const device = navigation.getParam("device");
    return (
      <LinearGradient
        colors={["#0f7383", "#042630"]}
        style={{ flex: 1, justifyContent: "center" }}
        start={[0, 1]}
        end={[1, 0]}
      >
        {this.props.loading ? (
          <Spinner color="#00F7EA" />
        ) : (
          <>
            {device.is_alerted ? (
              <Content style={{ marginTop: "30%" }}>
                <Icon
                  name="mobile"
                  type="Entypo"
                  style={{
                    marginRight: 10,
                    color: "#fff",
                    fontSize: 100,
                    paddingLeft: "40%"
                  }}
                />
                <Text
                  style={{
                    color: "#f1c601",
                    paddingLeft: "27%",
                    paddingRight: 10,

                    fontWeight: "600",
                    fontSize: 16
                  }}
                >
                  Your device in alerted list!
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: 20,
                    paddingRight: 10,
                    fontWeight: "300",
                    fontSize: 16,
                    paddingBottom: 20
                  }}
                >
                  Press the button{" "}
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: 16
                    }}
                  >
                    Remove Alert
                  </Text>{" "}
                  to remove the device from the alerted devices
                </Text>
                {!!this.props.errors.length && (
                  <List style={{ marginLeft: 10 }}>
                    {this.props.errors.map(error => (
                      <List key={error}>
                        <Text style={{ color: "#f1c601" }}>
                          <Text style={{ color: "#f1c601" }}>{error}</Text>
                        </Text>
                      </List>
                    ))}
                  </List>
                )}
                <Button
                  style={{ backgroundColor: "#f1c601" }}
                  block
                  rounded
                  onPress={() => this.removeAlert()}
                >
                  <Text style={{ color: "#042630" }}>Remove Alert</Text>
                </Button>
              </Content>
            ) : (
              <Content style={{ marginTop: "20%" }}>
                <Icon
                  name="mobile"
                  type="Entypo"
                  style={{
                    marginRight: 10,
                    color: "#fff",
                    fontSize: 100,
                    paddingLeft: "40%",
                    paddingBottom: "10%"
                  }}
                />
                {!!this.props.errors.length && (
                  <List style={{ marginLeft: 10 }}>
                    {this.props.errors.map(error => (
                      <List key={error}>
                        <Text style={{ color: "#f1c601" }}>
                          <Text style={{ color: "#f1c601" }}>{error}</Text>
                        </Text>
                      </List>
                    ))}
                  </List>
                )}

                <Button
                  style={{ borderColor: "#00F7EA", marginTop: 10 }}
                  block
                  transparent
                  bordered
                  onPress={() =>
                    this.props.navigation.navigate("TransfareOwner", {
                      device: device
                    })
                  }
                >
                  <Body>
                    <Text style={{ color: "#00F7EA", fontWeight: "700" }}>
                      Transfare Ownership
                    </Text>
                  </Body>
                  <Right>
                    <Icon
                      name="ios-arrow-forward"
                      type="Ionicons"
                      style={{ color: "#00F7EA", paddingRight: 20 }}
                    />
                  </Right>
                </Button>
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: 20,
                    paddingRight: 10,
                    paddingTop: 30,
                    fontWeight: "600",
                    fontSize: 16
                  }}
                >
                  Did you lost your device?
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: 20,
                    paddingRight: 10,
                    fontWeight: "300",
                    fontSize: 16
                  }}
                >
                  Press the button{" "}
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: 16
                    }}
                  >
                    Lost The Device
                  </Text>{" "}
                  to add the device to the alerted devices
                </Text>
                <Button
                  style={{
                    borderColor: "#f1c601",
                    borderWidth: "700",
                    marginTop: 10
                  }}
                  block
                  rounded
                  transparent
                  bordered
                  onPress={() => this.addAlert()}
                >
                  <Text style={{ color: "#f1c601", fontWeight: "700" }}>
                    Lost The Device
                  </Text>
                </Button>
              </Content>
            )}
          </>
        )}
      </LinearGradient>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.devicesReducer.loading,
  errors: state.errorReducer.errors
});

const mapDispatchToProps = dispatch => ({
  changeAlertStatusTrue: (user, deviceID, navigation) =>
    dispatch(actions.changeAlertStatusTrue(user, deviceID, navigation)),
  changeAlertStatusFalse: (user, deviceID, navigation) =>
    dispatch(actions.changeAlertStatusFalse(user, deviceID, navigation))
});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeviceDetail)
);
