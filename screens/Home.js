//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,  } from 'react-native';

// create a component
export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
