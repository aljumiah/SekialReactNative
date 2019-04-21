import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";

class Login extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken(this.props.navigation);
    if (this.props.user) {
      this.props.navigation.replace("Home");
    }
  }
  async componentDidUpdate() {
    await this.props.errors;
    if (this.props.errors) {
    }
  }
  resetState = () => {
    this.setState({ username: null, password: null });
  };

  Login = () => {
    this.props.login(this.state, this.props.navigation);
    this.resetState();
  };

  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/ios/80/000000/identification-documents-filled.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            maxLength={10}
            keyboardType="numeric"
            placeholder="National ID"
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ios/80/000000/lock-2-filled.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.Login}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.replace("Signup")}
        >
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  buttonDisabled: {
    backgroundColor: "#e7e7e7"
  },
  loginText: {
    color: "white"
  }
});
const mapStateToProps = state => ({
  user: state.authReducer.user,
  errors: state.errorReducer.errors
});
const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  checkForExpiredToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
