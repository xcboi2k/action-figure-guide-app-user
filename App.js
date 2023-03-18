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

//MENU SCREENS
import BA20132014MenuScreen from "components/screens/BA20132014MenuScreen";
import BA20142015MenuScreen from "components/screens/BA20142015MenuScreen";
import BA20152017MenuScreen from "components/screens/BA20152017MenuScreen";
import EX20142015MenuScreen from "components/screens/EX20142015MenuScreen";
import MU20152017MenuScreen from "components/screens/MU20152017MenuScreen";

//INFO SCREENS
import BA20132014InfoScreen from "components/screens/BA20132014InfoScreen";
import BA20142015InfoScreen from "components/screens/BA20142015InfoScreen";
import BA20152017InfoScreen from "components/screens/BA20152017InfoScreen";
import EX20142015InfoScreen from "components/screens/EX20142015InfoScreen";
import MU20152017InfoScreen from "components/screens/MU20152017InfoScreen";

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
        
        <Stack.Screen name="BA20132014Menu" component={BA20132014MenuScreen} />
        <Stack.Screen name="BA20142015Menu" component={BA20142015MenuScreen} />
        <Stack.Screen name="BA20152017Menu" component={BA20152017MenuScreen} />
        <Stack.Screen name="EX20142015Menu" component={EX20142015MenuScreen} />
        <Stack.Screen name="MU20152017Menu" component={MU20152017MenuScreen} />

        <Stack.Screen name="BA20132014Info" component={BA20132014InfoScreen} />
        <Stack.Screen name="BA20142015Info" component={BA20142015InfoScreen} />
        <Stack.Screen name="BA20152017Info" component={BA20152017InfoScreen} />
        <Stack.Screen name="EX20142015Info" component={EX20142015InfoScreen} />
        <Stack.Screen name="MU20152017Info" component={MU20152017InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


