import React, { PureComponent } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default class ListCell extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={styles.cell}
      >
        <SafeAreaView>
          <Text style={styles.text}>{this.props.text}</Text>
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "white",
    height: 44,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20
  }
});
