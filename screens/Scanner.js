//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getScannerInfo } from '../services';
import "firebase/firestore";
import { firebase } from "../config/firebaseConfig";
require('firebase/auth');
import moment from 'moment';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';

const Scanner = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [fullName, setFullName] = useState();
    const [scannedData, setScannedData] = useState(1);
    const [userID, setUserID] = useState();
    const [scannerDetails, setScannerDetails] = useState([]);
    const [dbMonths, setDbMonths] = useState([]);
    const [dbYears, setDbYears] = useState([]);
    const [dbDates, setDbDates] = useState(28);

    let list = []

    function fetchScanner() {

        getScannerInfo().then((data) => {
            list = data
            console.log(list.length);

            if (list.length > 0) {
                const sortProperty = 'userDayScanned';
                const sorted = [...list].sort((a, b) => b[sortProperty] - a[sortProperty]);
                console.log(sorted[list.length - 1].userDayScanned);
                const userDayDiff = sorted[list.length - 1].userDayScanned;

                (async () => {
                    const { status } = await BarCodeScanner.requestPermissionsAsync();
                    setHasPermission(status === 'granted');
                })();

                if (hasPermission === null) {
                    return <Text>Requesting for Camera permission</Text>
                }
                if (hasPermission === false) {
                    return <Text>No Access to Camera</Text>
                }

                setScanned(true);
                const dayScanned = new Date().getDate();
                const monthScanned = new Date().getMonth() + 1;
                const yearScanned = new Date().getFullYear();
                let currentDate = moment().format("YYYY-MM-DD");

                alert("Today's date difference : " + userDayDiff);
                if (userDayDiff < 28) {
                    try {
                        const currentUser = firebase.auth().currentUser;
                        const db = firebase.firestore();

                        db.collection("scanner").add({
                            userID: currentUser.uid,
                            scanned: 0,
                            day: dayScanned,
                            month: monthScanned,
                            year: yearScanned,
                            date: currentDate,
                        });
                    alert("Hello, you have already scanned for a sanitory towel in the past 28 days");
                    navigation.navigate('Home');
                } catch (error) {
                    alert("There is something wrong while adding a scanner!!!", error.message);
                    console.log(error.message);
                    navigation.navigate('Home');
                }
                }
                else {
                    try {
                        const currentUser = firebase.auth().currentUser;
                        const db = firebase.firestore();

                        db.collection("scanner").add({
                            userID: currentUser.uid,
                            scanned: 1,
                            day: dayScanned,
                            month: monthScanned,
                            year: yearScanned,
                            date: currentDate,
                        });
                        alert("Thanks for scanning, wait for you transaction to be made.");
                        navigation.navigate('ScannedSuccessful');
                    } catch (error) {
                        alert("There is something wrong while adding a scanner!!!", error.message);
                        console.log(error.message);
                        navigation.navigate('Home');
                    }
                }
            } else {
                (async () => {
                    const { status } = await BarCodeScanner.requestPermissionsAsync();
                    setHasPermission(status === 'granted');
                })();

                if (hasPermission === null) {
                    return <Text>Requesting for Camera permission</Text>
                }
                if (hasPermission === false) {
                    return <Text>No Access to Camera</Text>
                }

                setScanned(true);
                const dayScanned = new Date().getDate();
                const monthScanned = new Date().getMonth() + 1;
                const yearScanned = new Date().getFullYear();
                let currentDate = moment().format("YYYY-MM-DD");

                try {
                    const currentUser = firebase.auth().currentUser;
                    const db = firebase.firestore();

                    db.collection("scanner").add({
                        userID: currentUser.uid,
                        scanned: 1,
                        day: dayScanned,
                        month: monthScanned,
                        year: yearScanned,
                        date: currentDate,
                    });
                    setScanned(false);
                    alert("Scanned successfully");
                    navigation.navigate('ScannedSuccessful');
                } catch (error) {
                    alert("There is something wrong while adding a scanner!!!", error.message);
                    console.log(error.message);
                    navigation.navigate('Home');
                }
            }
        })
    }

    useEffect(() => {
        fetchScanner()
    }, []);

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : fetchScanner}
                style={StyleSheet.absoluteFillObject}
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
export default Scanner;