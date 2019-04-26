import React, { Component } from "react";
import { connect } from "react-redux";
import { LinearGradient } from "expo";
import * as actions from "../../store/actions";

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

class Signup extends Component {
  state = {
    username: "",
    phone_number: "",
    password: "",
    email: ""
  };
  handleSubmit = async () => {
    // () => this.props.navigation.replace("Login");
    await this.props.signup(this.state, this.props.navigation);
    this.resetState();
  };
  resetState = () => {
    console.log("resetState");
    this.setState({
      username: "",
      password: "",
      phone_number: "",
      email: ""
    });
  };

  render() {
    return (
      <LinearGradient
        colors={["#0f7383", "#042630"]}
        style={{ flex: 1 }}
        start={[0, 0]}
        end={[1, 0]}
      >
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
              placeholder="National ID"
              maxLength={10}
              keyboardType="numeric"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/ios/80/000000/phone-filled.png"
              }}
            />
            <TextInput
              style={styles.inputs}
              maxLength={12}
              keyboardType="numeric"
              placeholder="966 55 555 555"
              onChangeText={phone_number =>
                this.setState({ phone_number: phone_number })
              }
              value={this.state.phone_number}
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

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/ios/80/000000/gmail-filled.png"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.handleSubmit}
          >
            <Text style={styles.loginText}>Signup</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{}}
            onPress={() => this.props.navigation.replace("Login")}
          >
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: "#d6d7da"
  },
  buttonDisabled: {
    backgroundColor: "#e7e7e7"
  },
  TextDisabled: {
    // color: "#000"
  },
  loginButton: {
    backgroundColor: "transparent"
  },
  loginText: {
    color: "white"
  }
});

const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({
  signup: (userData, navigation) =>
    dispatch(actions.signup(userData, navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
