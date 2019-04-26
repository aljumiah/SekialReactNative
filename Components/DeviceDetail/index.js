import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Button, Content, Text, Spinner } from "native-base";
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
              <Content style={{ marginTop: "50%" }}>
                <Button
                  block
                  rounded
                  warning
                  onPress={() => this.removeAlert()}
                >
                  <Text>Remove Alert</Text>
                </Button>
              </Content>
            ) : (
              <Content style={{ marginTop: "50%" }}>
                <Button
                  style={{ borderColor: "#00F7EA", marginTop: 10 }}
                  block
                  rounded
                  transparent
                  bordered
                  onPress={() =>
                    this.props.navigation.navigate("TransfareOwner", {
                      device: device
                    })
                  }
                >
                  <Text style={{ color: "#00F7EA", fontWeight: "700" }}>
                    Transfare Ownership
                  </Text>
                </Button>
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
  loading: state.devicesReducer.loading
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
