import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {
  Button,
  Content,
  Text,
  Form,
  Input,
  Item,
  Label,
  Spinner,
  ListItem,
  List,
  Card,
  CardItem,
  View,
  Icon
} from "native-base";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo";
import DeviceTrans from "./DeviceTrans";
class TransfareOwner extends React.Component {
  state = {
    id: "",
    user: "",
    is_alerted: false
  };
  componentDidMount() {
    const device = this.props.navigation.getParam("device");
    this.setState({ id: device.id });
  }
  static navigationOptions = {
    title: "Transfare Ownership"
  };
  handleChange = event => {
    this.setState({ user: event.nativeEvent.text });
  };
  handleSubmit = deviceID => {
    this.props.transfareUser(this.state, deviceID, this.props.navigation);
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
    headerTitle: <DeviceTrans navigation={navigation} />
  });
  render() {
    const { navigation } = this.props;
    const device = navigation.getParam("device");
    return (
      <LinearGradient
        colors={["#0f7383", "#042630"]}
        style={{ flex: 1 }}
        start={[0, 1]}
        end={[1, 0]}
      >
        {this.props.loading ? (
          <Spinner color="#00F7EA" />
        ) : (
          <Content>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginLeft: "30%",
                paddingTop: "20%"
              }}
            >
              <Icon
                style={{ width: 50, fontSize: 50, color: "#fff" }}
                type="Entypo"
                name="mobile"
              />
              <Icon
                style={{ width: 50, fontSize: 50, color: "#00F7EA" }}
                type="MaterialCommunityIcons"
                name="transfer-right"
              />
              <Icon
                style={{ width: 50, fontSize: 50, color: "#fff" }}
                type="Entypo"
                name="user"
              />
            </View>
            <Form style={{ marginTop: "10%" }}>
              <Text
                style={{
                  color: "#fff",
                  paddingLeft: 20,
                  paddingRight: 10,
                  fontWeight: "300"
                }}
              >
                <Text style={{ color: "#f1c601", fontWeight: "600" }}>
                  Important:{" "}
                </Text>
                When entering the ID number, the device is going to be
                transfared to the new owner and the device will no longer be
                shown in your device list.
              </Text>
              <Text
                style={{ color: "#fff", fontWeight: "600", paddingLeft: 20 }}
              >
                ID must be more than 10 characters
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

              <Item rounded style={{ backgroundColor: "#fff", marginTop: 20 }}>
                <Label
                  style={{
                    marginLeft: 20,
                    color: "#042630"
                  }}
                >
                  To:
                </Label>
                <Input
                  maxLength={14}
                  keyboardType="numeric"
                  onChange={this.handleChange}
                  placeholder="Enter ID Number"
                />
              </Item>
            </Form>
            {this.state.user.length > 9 ? (
              <Button
                style={{
                  borderColor: "#00F7EA",
                  borderWidth: "700",
                  marginTop: 20
                }}
                block
                rounded
                transparent
                bordered
                onPress={() => this.handleSubmit(device.id)}
              >
                <Text style={{ color: "#00F7EA", fontWeight: "700" }}>
                  Transfare
                </Text>
              </Button>
            ) : (
              <Button
                block
                rounded
                transparent
                bordered
                onPress={() => this.handleSubmit(device.id)}
                disabled
                style={{ marginTop: 20 }}
              >
                <Text>Transfare</Text>
              </Button>
            )}
          </Content>
        )}
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  devices: state.devicesReducer.devices,
  loading: state.devicesReducer.loading,
  errors: state.errorReducer.errors
});
const mapDispatchToProps = dispatch => ({
  transfareUser: (user, deviceID, navigation) =>
    dispatch(actions.transfareUser(user, deviceID, navigation))
});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransfareOwner)
);
