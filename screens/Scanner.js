//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Linking} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {getScannerInfo} from '../services';
import "firebase/firestore";
import { firebase } from "../config/firebaseConfig";
require('firebase/auth');
import moment from 'moment'; 

export default function Scanner({ navigation }) {
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

    function fetchScanner(){
        let dataObj ="";
        getScannerInfo().then((data) => {
            list = data
            console.log(list.length);
            const sortProperty = 'userDayScanned';
            const sorted = [...list].sort((a, b) => b[sortProperty] - a[sortProperty]);
            console.log(sorted[list.length-1].userDayScanned);
            // console.log(sorted.userDayScanned);
            dataObj = sorted[list.length-1].userDayScanned;
            // if (list.length > 0) {
            //     const sortProperty = 'userDayScanned';
            //     const sorted = [...list].sort((a, b) => b[sortProperty] - a[sortProperty]);
            //     //setData(sorted);
            //     // setScannerDetails(sorted);
            //     sorted.map((item, index) => {
            //         setDbDates(item.userDayScanned);
            //         alert("List from DB "+ item.userDayScanned);
            //         console.log(item.userDayScanned);
            //     }
            //     )
            //     console.log(scannerDetails);
            // } else {
            //     setDbDates(28);
            //     alert("Empty List "+ dbDates)
            //     console.log(dbDates)
            // }

        })
        console.log(dataObj)
        return dataObj;
    }

    const accesscamera = async => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }

    useEffect(() => {
        fetchScanner()
        // accesscamera()
        handleBarCodeScanned()
    }, []);

    const handleBarCodeScanned = () => {
        setScanned(true);
        const dayScanned = new Date().getDate();
        const monthScanned = new Date().getMonth() + 1;
        const yearScanned = new Date().getFullYear();
        let currentDate = moment().format("YYYY-MM-DD");

        // alert("Today's date difference : "+ fetchScanner);
        // if(dbDates < 28){
        //     alert("Hello, you have already scanned for a sanitory towel in the past 28 days");
        // } 
        // else{
        //     try {
        //         const currentUser = firebase.auth().currentUser;
        //         const db = firebase.firestore();
        
        //         db.collection("scanner").add({
        //             userID: currentUser.uid,
        //             scanned: 1,
        //             day: dayScanned,
        //             month: monthScanned,
        //             year: yearScanned,
        //             date: currentDate,
        //         });
        //         alert("Thanks for scanning");
        //         navigation.navigate("HomePage");
        //     } catch (error) {
        //         alert("There is something wrong while adding a scanner!!!", error.message);
        //         console.log(error.message);
        //     }
        // }
    };

    // if(hasPermission === null){
    //     return <Text>Requesting for Camera permission</Text>
    // }
    // if(hasPermission === false){
    //     return <Text>No Access to Camera</Text>
    // }

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
