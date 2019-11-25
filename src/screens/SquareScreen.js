import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "red":
        return state.red + action.payload >= 0 &&
          state.red + action.payload <= 255
          ? { ...state, red: state.red + action.payload }
          : state;

      case "green":
        return state.green + action.payload >= 0 &&
          state.green + action.payload <= 255
          ? { ...state, green: state.green + action.payload }
          : state;

      case "blue":
        return state.blue + action.payload >= 0 &&
          state.blue + action.payload <= 255
          ? { ...state, blue: state.blue + action.payload }
          : state;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorAdjuster
        title="Red"
        onIncrement={() => {
          dispatch({ type: "red", payload: 5 });
        }}
        onDecrement={() => {
          dispatch({ type: "red", payload: -5 });
        }}
      />
      <ColorAdjuster
        title="Blue"
        onIncrement={() => {
          dispatch({ type: "blue", payload: 5 });
        }}
        onDecrement={() => {
          dispatch({ type: "blue", payload: -5 });
        }}
      />
      <ColorAdjuster
        title="Green"
        onIncrement={() => {
          dispatch({ type: "green", payload: 5 });
        }}
        onDecrement={() => {
          dispatch({ type: "green", payload: -5 });
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          border: "1px solid"
        }}
      />
    </View>
  );
};

//With useState Hook
// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const [green, setGreen] = useState(0);
//   return (
//     <View>
//       <Text>SquareScreen</Text>
//       <ColorAdjuster title="Red" onChange={setRed} color={red} />
//       <ColorAdjuster title="Blue" onChange={setBlue} color={blue} />
//       <ColorAdjuster title="Green" onChange={setGreen} color={green} />
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//           border: "1px solid"
//         }}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default SquareScreen;
