import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import useFonts from "./assets/fonts/useFonts";
import AppLoading from "expo-app-loading";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isReady, setIsReady] = React.useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fff",
              textAlign: "center",
              headerTitleStyle: {
                color: "#000",
                fontSize: 20,
              },
            },
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: "Tour Map",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fff",
              textAlign: "center",
              headerTitleStyle: {
                color: "#000",
                fontSize: 20,
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
