import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetail = ({ details }) => {
  return (
    <View>
      <Image source={details.img} />
      <Text>{details.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
