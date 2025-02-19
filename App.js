import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [bgColor, setBgColor] = useState("white"); // Màu nền mặc định

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/* <Text style={styles.text}>{bgColor.toUpperCase()}</Text> */}
       
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => changeBackground("green")}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => changeBackground("blue")}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "brown" }]}
        onPress={() => changeBackground("brown")}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
        onPress={() => changeBackground("yellow")}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => changeBackground("red")}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => changeBackground("black")}
      >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    width: 250,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
