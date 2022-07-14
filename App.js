import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Button from "./components/Button";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function WelcomeScreen(){
  return(
    <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <ImageBackground source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageBackground.png")} resizeMode="cover" style={styles.image}>
          </ImageBackground>
        </View>
        <Image
          source={require("E:/Programming/Learning Materials/React Native/Action Figure Guide App/assets/img/welcomePageLogo.png")}
          style={styles.logo}
          resizeMode={"contain"}>
        </Image>
        <View style={styles.buttonContainer}>
          <Button title="LET'S GO" type="filled" width="35%" rounded="5px"/>
        </View>
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Bold": require('assets/fonts/Inter-Bold.otf'),
    "Inter-Light": require('assets/fonts/Inter-Light.otf'),
    "Inter-Regular": require('assets/fonts/Inter-Regular.otf'),
    "Inter-Medium": require('assets/fonts/Inter-Medium.otf'),
    "Inter-Black": require('assets/fonts/Inter-Black.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    position:"relative",
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    justifyContent:"space-around",
    marginTop:20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 480,
    height: 150,
  }
});
