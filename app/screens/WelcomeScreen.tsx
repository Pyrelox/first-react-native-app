import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colours from "../assets/colours";

function WelcomeScreen(props: any) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/favicon.png")}
    >
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colours.secondary,
  },
});

export default WelcomeScreen;
