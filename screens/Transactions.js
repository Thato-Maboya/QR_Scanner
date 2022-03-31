import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  } from 'react-native';
// import changeNavigationBarColor from 'react-native-android-navigation-bar';
// import ToolbarAndroid from '@react-native-community/toolbar-android';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTransactionsScreen from './all';
import DeclinedTransactionsScreen from './declined';
import AcceptedTransactionsScreen from './accepted';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', paddingTop: 20, backgroundColor:"#E894A8" }}>

      </View>
    );
  }
export default function Transactions({ navigation }) {
    console.log(navigation);
    return (
        // <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: "#E894A8", color: "#FFFFFF", fontWeight: '500' },
            tabBarLabelStyle: { color: "#2D3047", fontSize: 12, fontWeight: 'bold' },
            tabBarIndicatorStyle: {
                backgroundColor: "#2D3047",
                borderWidth: 1.5
            }
        }}>
            <Tab.Screen name="All" component={AllTransactionsScreen} />
            <Tab.Screen name="Accepted" component={AcceptedTransactionsScreen} />
            <Tab.Screen name="Declined" component={DeclinedTransactionsScreen} />

            </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // works only when flex direction is row, other if its a column then use align items
        alignContent: "center",
        alignItems: "center", // works when flex direction is column. otherwise use justify content
    },
    image: {
        width: "60%",
        aspectRatio: 1,
        // height: "400px"
    }
});
