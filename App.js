import React from "react";
import Scanner from "./screens/Scanner";
import Home from "./screens/Home";
import Login from "./screens/Login";
import signUp from "./screens/signUp";
import Profile from "./screens/UserProfile";
import ForgetPassword from "./screens/ForgetPassword";
import HomePage from "./screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signUp" component={signUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
      <Stack.Screen name="Homepage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: true }} />
      </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}