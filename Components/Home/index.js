import React from "react";
import {} from "react-native";
// NativeBase Components
import {
  Button,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  View,
  Right,
  Icon,
  Left,
  Body
} from "native-base";
export default class Home extends React.Component {
  static navigationOptions = {
    //title: "Detail",
    headerRight: (
      <Text
        bordered
        color="#fff"
        style={{ paddingLeft: 20, fontSize: 16, color: "#fff", padding: 10 }}
      >
        Logout
      </Text>
    )
  };
  render() {
    return (
      <Content>
        <Separator style={{ backgroundColor: "#f5f5f5" }} bordered>
          <Text style={{ color: "#000" }}>YOUR DEVICE</Text>
        </Separator>
        <ListItem
          noIndent
          style={{ backgroundColor: "#FFD07E" }}
          // onPress={() => this.props.navigation.navigate("DeviceDetail")}
        >
          <Left>
            <Icon name="mobile" type="Entypo" style={{ color: "#000" }} />
          </Left>
          <Body>
            <Text>IEMI:</Text>
          </Body>
          <Right>
            <Icon
              name="exclamationcircle"
              type="AntDesign"
              style={{ color: "#F7021C" }}
            />
          </Right>
        </ListItem>
        <ListItem
          noIndent
          style={{ backgroundColor: "#B6D7B9" }}
          onPress={() => this.props.navigation.navigate("DeviceDetail")}
        >
          <Left>
            <Icon name="mobile" type="Entypo" style={{ color: "#000" }} />
          </Left>
          <Body>
            <Text style={{ color: "#fff" }}>IEMI</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" style={{ color: "#229c91" }} />
          </Right>
        </ListItem>
        <Separator style={{ backgroundColor: "#f5f5f5" }}>
          <Text style={{ color: "#000" }}>OTHER DEVICES YOU OWN </Text>
        </Separator>
        <ListItem
          style={{ backgroundColor: "#B8D0EB" }}
          last
          onPress={() => this.props.navigation.navigate("DeviceDetail")}
        >
          <Left>
            <Icon name="mobile" type="Entypo" />
          </Left>
          <Body>
            <Text>IEMI:</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" style={{ color: "#2B8FFF" }} />
          </Right>
        </ListItem>
      </Content>
    );
  }
}
