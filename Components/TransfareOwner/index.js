import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Button, Content, Text, Form, Input, Item, Label } from "native-base";
import { withNavigation } from "react-navigation";

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

  render() {
    const { navigation } = this.props;
    const device = navigation.getParam("device");
    return (
      <Content>
        <Form>
          <Item floatingLabel last style={{ backgroundColor: "#fff" }}>
            <Label>NEW OWNER</Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              onChange={this.handleChange}
            />
          </Item>
        </Form>
        {this.state.user.length > 1 ? (
          <Button full success onPress={() => this.handleSubmit(device.id)}>
            <Text>Transfare Ownership</Text>
          </Button>
        ) : (
          <Button
            full
            success
            onPress={() => this.handleSubmit(device.id)}
            disabled={true}
          >
            <Text>Transfare</Text>
          </Button>
        )}
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  devices: state.devicesReducer.devices
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
