//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Linking} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        alert("Bar Code with Type ${type} and data ${Linking.openURL('${data}')} has been scanned");

    };

    if(hasPermission === null){
        return <Text>Requesting for Camera permission</Text>
    }
    if(hasPermission === false){
        return <Text>No Access to Camera</Text>
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned = {scanned? undefined : handleBarCodeScanned}
                style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)} />}
        </View>
    )

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
