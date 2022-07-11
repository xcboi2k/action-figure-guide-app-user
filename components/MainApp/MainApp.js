import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomePageScreen from "../screens/WelcomePageScreen";
const Stack = createNativeStackNavigator();

const MainApp = ({ onLayoutRootView }) => {
  return (
    <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="WelcomePage"
                    component={WelcomePageScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default MainApp