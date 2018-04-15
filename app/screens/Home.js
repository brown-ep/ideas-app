import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import IdeaList from "../components/IdeaList/IdeaList";

export default class Home extends Component {
  static navigationOptions = { title: "Ideas" };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IdeaList />
      </View>
    );
  }
}
