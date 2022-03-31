import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../config/firebaseConfig';
import { getScannerTransaction, getScannerTransactionLength, getScannerTransactionSuccess,getScannerTransactionUnsuccess,
getScannerTransactionSuccessLength, getScannerTransactionUnsuccessLength} from '../services';
import {AntDesign } from '@expo/vector-icons';
require('firebase/auth')

const DeclinedTransactionsScreen = ({ navigation }) => {
    const [transaction, setTransaction] = useState([]);
    const [transactionSuccess, setTransactionSuccess] = useState([]);
    const [transactionUnsuccess, setTransactionUnsuccess] = useState([]);
    const [transactionLength, setTransactionLength] = useState([]);
    const [successTransactionLength, setSuccessTransactionLength] = useState([]);
    const [unsuccessTransactionLength, setUnsuccessTransactionLength] = useState([]);
    const [all, setAll] = useState(true);
    const [success, setSuccess] = useState(false);
    const [denied, setDenied] = useState(false);
    let list = []

    const fetchTransaction = async => {
        getScannerTransaction().then((data) => {
           list = data
           let groupArray = require('group-array');
           list = groupArray(list, 'yyyymm');
           console.log(list);
           
           setTransaction(list)
        })
     }
     const fetchTransactionSuccess = async => {
        getScannerTransactionSuccess().then((data) => {
           list = data
           let groupArray = require('group-array');
           list = groupArray(list, 'yyyymm');
           console.log(list);
           
           setTransactionSuccess(list)
        })
     }
     const fetchTransactionUnsuccess = async => {
        getScannerTransactionUnsuccess().then((data) => {
           list = data
           let groupArray = require('group-array');
           list = groupArray(list, 'yyyymm');
           console.log(list);
           
           setTransactionUnsuccess(list)
        })
     }
     const fetchTransactionLength = async => {
        getScannerTransactionLength().then((data) => {
           list = data
           console.log(list);
           setTransactionLength(list)
        })
     }
     const fetchSuccessTransactionLength = async => {
        getScannerTransactionSuccessLength().then((data) => {
           list = data
           console.log(list);
           setSuccessTransactionLength(list)
        })
     }
     const fetchUnsuccessTransactionLength = async => {
        getScannerTransactionUnsuccessLength().then((data) => {
           list = data
           console.log(list);
           setUnsuccessTransactionLength(list)
        })
     }

     const handlePressAll = () => {
         setAll(true);
         setSuccess(false);
         setDenied(false);
         navigation.navigate('Transaction');
    }
    const handlePressIn = () => {
         setAll(false);
         setSuccess(true);
         setDenied(false);
         navigation.navigate('Transaction');
    }
    const handlePressOut = () => {
        setAll(false);
        setSuccess(false);
        setDenied(true);
        navigation.navigate('Transaction');
    }

     useEffect(() => {
        fetchTransaction()
        fetchTransactionSuccess()
        fetchTransactionUnsuccess()
        fetchTransactionLength()
        fetchSuccessTransactionLength()
        fetchUnsuccessTransactionLength()
     }, [])

    return (
        
        <View style={styles.container}>
            
            <Text>Total Unsuccessful Transactions : {unsuccessTransactionLength}</Text>
            {
                Object.entries(transactionUnsuccess).map(([item, index]) => {
                    return (
                        <View key={index} style={styles.RepoInfoDetails}>
                            <Text style={styles.sectionHeader}>{item}</Text>
                            <View>
                                {
                                    index.map((key, value) => {
                                        return (
                                            <View style={styles.RepoInfo}>
                                                <View><Text style={{marginHorizontal:10, fontSize:15}}>{key.date}</Text></View>
                                                <View><Text style={{fontSize:15}}>{key.scanned ==1 ? "Accepted" : "Denied"}</Text></View>
                                            </View>
                                        )
                                    }
                                    )
                                }
                            </View>

                        </View>
                    )
                }
                )}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#808080',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 150,
        width: 150,
        marginBottom: 50,

    },
    fieldText_Design: {
        backgroundColor: '#fff',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    textDesign: {
        color: '#FFC0CB',
        fontSize: 30,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#FFC0CB',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 150,
        marginTop: 20,
    },
    textDesign4: {
        color: '#FFFFFF',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    textDesign5: {
        color: '#FFC0CB',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    signUpText_Design: {
        color: '#FFC0CB',
        marginTop: 55,
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    controlView: {
        marginTop: 350,
    },
    RepoInfoDetails: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        // margin: 10,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
        marginLeft: '10%',
        marginRight: '10%',
        // flex:1,
    },
    RepoInfo: {
        flexDirection: 'row',
        backgroundColor: '#E894A8',
        justifyContent: 'space-between',
        // padding: 10,
        margin: 0,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        // margin: 10,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        height: 70,
        alignItems: 'center',
    },
    TopHeaders: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: '#c59d5f',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#F8C8DC",
        // flex:1
        // margin: 10,
        // borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
    },
    sectionHeader: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        // backgroundColor: 'rgba(247,247,247,1.0)',
    },
});

export default DeclinedTransactionsScreen;