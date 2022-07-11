import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainApp = ({ onLayoutRootView }) => {
  return (
    <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default MainApp