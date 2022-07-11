import { useState, useEffect, useCallback } from "react";

import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, Text, View } from 'react-native';

import MainApp from "components/MainApp";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                // LOADS THE FONTS
                await loadAsync({
                  "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
                  "Inter-Light": require("./assets/fonts/Inter-Light.otf"),
                  "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
                  "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
                  "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setIsAppReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isAppReady) {
            await SplashScreen.hideAsync();
        }
    }, [isAppReady]);

    if (!isAppReady) {
        return null;
    }
    
  return (
    <MainApp onLayoutRootView={onLayoutRootView} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
