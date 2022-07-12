import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';



export default function App() {  
  return (
    <View style={styles.container}>
    <ImageBackground source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageBackground.png")} resizeMode="cover" style={styles.image}>
      <Image source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/Welcome Page Logo.png")} style={styles.logo}></Image>
      <Text style={styles.text}>Logo</Text>
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
  },
  logo: {
    width:100,
    height:100,
    flex: 1,
    position:"absolute",

  }
});
