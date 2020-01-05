import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  //console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>Hello Kat</Text>
      <Button
        color="#dddddd"
        title="Go to Components Page"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Navigate to List"
      />
      <Button
        color="#00b2a9"
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Navigate to Image"
      />
      <Button
        color="#e6e6e6"
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Navigate to Counter"
      />
      <Button
        color="#ddd"
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Navigate to Color"
      />
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Navigate to Square"
      />
      <Button
        color="#ddd"
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Navigate to Text Input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
