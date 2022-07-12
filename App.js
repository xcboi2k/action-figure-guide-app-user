import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Button from "./components/Button";

export default function App() {  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageBackground.png")} resizeMode="cover" style={styles.image}>
        </ImageBackground>
      </View>
      <View style = {styles.overlay}>
        <Image source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageLogo.png")} style={styles.logo}></Image>
        <Text style={styles.text}>Logo</Text>
        <Button title={"LET'S GO"} type={"filled"} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  image: {
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: 'rgba(0,0,0,0)',
    width: 640,
    height: 208
  }
});
