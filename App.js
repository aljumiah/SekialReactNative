import React from "react";
import Login from "./Components/Login";
import store from "./store";
import { Provider } from "react-redux";
import AppContainer from "./Navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;

