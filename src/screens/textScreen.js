import React, { useState, useReducer } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

//With useReducer Hook
const TextScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, text: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { text: "" });
  return (
    <View>
      <Text>Counter Screen</Text>
      <TextInput
        style={styles.input}
        onChange={e => {
          //console.log(e);
          dispatch({ type: "ADD", payload: e.nativeEvent.text });
        }}
      />

      <Text>Name: {state.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 30
  }
});

export default TextScreen;
