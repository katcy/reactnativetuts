import React, { useState } from "react";
import { Text, Button, View, FlatList, StyleSheet } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  const randomRGB = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
  };
  return (
    <View style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}>
      <Text>Color Screen</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...color, randomRGB()]);
        }}
      />
      <FlatList
        data={color}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          // console.log(li);
          return (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: item
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
