import React from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Icon } from "native-base";
class UserInfo extends React.Component {
  render() {
    return (
      <>
        {this.props.user && (
          <>
            <Icon
              name="id-card-o"
              type="FontAwesome"
              style={{ marginRight: 5, color: "#fff", fontSize: 17 }}
            />
            <Text style={{ color: "#fff", fontWeight: "400" }}>
              {this.props.user.username}
            </Text>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default withNavigation(
  connect(
    mapStateToProps,
    null
  )(UserInfo)
);
