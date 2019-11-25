import React, { useState, useReducer } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

//With useReducer Hook
const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Text>Counter Screen</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "DECREMENT", payload: 1 });
        }}
      />
      <Text>Counter Value: {state}</Text>
    </View>
  );
};

//With useState Hook
// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <View>
//       <Text>Counter Screen</Text>
//       <Button
//         title="Increment"
//         onPress={() => {
//           setCounter(counter + 1);
//         }}
//       />
//       <Button
//         title="Decrement"
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//       />
//       <Text>Counter Value: {counter}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default CounterScreen;
