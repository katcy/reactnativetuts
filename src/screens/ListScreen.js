import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const cars = [
    { car: "baleno", price: "INR 6L" },
    { car: "duster awd", price: "INR 6L" },
    { car: "audi", price: "INR 15L" }
  ];
  return (
    <FlatList
      keyExtractor={cars => cars.car}
      data={cars}
      renderItem={item => {
        //console.log(item);
        return (
          <Text style={styles.textStyle}>
            {item.item.car} Budget:{item.item.price}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 20,
    color: "#dddddd"
  }
});

export default ListScreen;
