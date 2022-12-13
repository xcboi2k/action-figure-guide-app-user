//LIBRARY IMPORTS
import React, { useState } from "react";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//LOCAL IMPORTS
import WelcomeScreen from "components/screens/WelcomeScreen/WelcomeScreen";
import MainMenuScreen from "components/screens/MainMenuScreen";
import CategoriesScreen from "components/screens/CategoriesScreen";
import FigureMenuScreen from "components/screens/FigureMenuScreen/FigureMenuScreen";
import FigureInformationScreen from "components/screens/FigureInformationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Bold": require('assets/fonts/Inter-Bold.otf'),
    "Inter-Light": require('assets/fonts/Inter-Light.otf'),
    "Inter-Regular": require('assets/fonts/Inter-Regular.otf'),
    "Inter-Medium": require('assets/fonts/Inter-Medium.otf'),
    "Inter-Black": require('assets/fonts/Inter-Black.otf'),
    "Inter-Italic": require('assets/fonts/Inter-Italic.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="FigureMenu" component={FigureMenuScreen} />
        <Stack.Screen name="FigureInfo" component={FigureInformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


