import React from "react";
import Login from "./Components/Login";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
export default App;
