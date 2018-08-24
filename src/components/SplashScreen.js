import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.main();
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <Text>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
