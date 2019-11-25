import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

//With useReducer Hook
const ColorAdjuster = ({ title, onIncrement, onDecrement }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={onIncrement} />
      <Button title={`Less ${title}`} onPress={onDecrement} />
    </View>
  );
};

//With useState Hook
// const ColorAdjuster = ({ title, onChange, color }) => {
//   return (
//     <View>
//       <Text>{title}</Text>
//       <Button
//         title={`More ${title}`}
//         onPress={() => {
//           if (color >= 0 && color < 255) {
//             onChange(color + 5);
//           }
//         }}
//       />
//       <Button
//         title={`Less ${title}`}
//         onPress={() => {
//           if (color > 0 && color <= 255) {
//             onChange(color - 5);
//           }
//         }}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default ColorAdjuster;
