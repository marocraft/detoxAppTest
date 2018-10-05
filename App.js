import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  state = {
    sayHi: undefined
  };

  renderAfterButton = () => {
    return (
      <View style={styles.renderAfterButtonStyle}>
        <Text
          style={{
            fontSize: 25
          }}
        >
          {this.state.sayHi} :)
        </Text>
      </View>
    );
  };

  onButtonPress = sayHi => {
    this.setState({
      sayHi: sayHi
    });
  };

  render() {
    if (this.state.sayHi) return this.renderAfterButton();
    return (
      <View testID="welcome" style={styles.container}>
        <Text style={styles.welcome}>Welcome Tontine</Text>
        <TouchableOpacity
          testID="hello_button"
          activeOpacity={0.8}
          style={styles.touchableOpacityStyle}
          onPress={this.onButtonPress.bind(this, "Hello Tontine")}
        >
          <Text style={styles.greeting}>Say Hello Tontine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="world_button"
          activeOpacity={0.8}
          style={styles.touchableOpacityStyle}
          onPress={this.onButtonPress.bind(this, "Tontine World")}
        >
          <Text style={styles.greeting}>Say World Tontine</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 25,
    marginBottom: 30
  },
  greeting: {
    color: "white",
    fontSize: 18
  },
  renderAfterButtonStyle: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  touchableOpacityStyle: {
    alignItems: "center",
    backgroundColor: "#E8764E",
    width: 250,
    borderRadius: 2,
    padding: 12,
    marginBottom: 5
  }
});
