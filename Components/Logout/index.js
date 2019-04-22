import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

// NativeBase Components
import { Button, Text } from "native-base";
class Logout extends React.Component {
  handleLogout = () => {
    this.props.logout(this.props.navigation);
  };

  render() {
    return (
      <Button
        style={{ backgroundColor: "none" }}
        onPress={() => this.handleLogout()}
      >
        <Text>logout</Text>
      </Button>
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
)(Logout);
