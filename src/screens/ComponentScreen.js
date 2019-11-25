import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const name = "Kat";
  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#dddddd",
    fontSize: 45
  },
  text2: {
    fontSize: 20
  }
});

export default ComponentScreen;
