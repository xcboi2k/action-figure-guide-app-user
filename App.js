import React from "react";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App() {  
  return (
    <View style={styles.container}>
    <ImageBackground source={require("../../assets/images/welcomeBackPage.jpg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
