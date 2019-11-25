import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const data = [
    {
      title: "Baleno",
      img: require("../../assets/beach.jpg")
    },
    {
      title: "Duster AWD",
      img: require("../../assets/forest.jpg")
    },
    {
      title: "Audi",
      img: require("../../assets/mountain.jpg")
    }
  ];
  return (
    <View>
      {data.map((li, i) => (
        <ImageDetail key={i} details={li} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
