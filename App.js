import React from "react";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Home from "./screens/Home";
import Scanner from "./screens/Scanner";
import Transactions from "./screens/Transactions";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/UserProfile";
import ForgetPassword from "./screens/ForgetPassword";
import HomePage from "./screens/HomePage";
import Transaction from "./screens/Transaction";
import ScannedSuccessful from "./screens/ScannedSuccessful";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';


const Stack = createStackNavigator();

function App() {
  
  
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#E894A8' } }}>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name="Homepage" component={HomePage} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ScannedSuccessful" component={ScannedSuccessful} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: true }} />
        <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: true }} />
        <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: true }} />
        <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: true }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}