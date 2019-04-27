import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import AppContainer from "./Navigation";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />

        <Provider store={store}>
          <AppContainer />
        </Provider>
      </>
    );
  }
}
