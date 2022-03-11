import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../config/firebaseConfig';
import { getScannerTransaction, getScannerTransactionLength, getScannerTransactionSuccess,getScannerTransactionUnsuccess,
getScannerTransactionSuccessLength, getScannerTransactionUnsuccessLength} from '../services';
import {AntDesign } from '@expo/vector-icons';
require('firebase/auth')

const Transaction = ({ navigation }) => {
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
        all?
        <View style={styles.container}>
            <View style={styles.TopHeaders}>
                <TouchableOpacity onPress={handlePressAll}><Text style={{fontWeight: 'bold',}}>All</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressIn}><Text>In</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressOut}><Text>Out</Text></TouchableOpacity>
            </View>
            <Text>Total Transactions : {transactionLength}</Text>
            {
                Object.entries(transaction).map(([item, index]) => {
                    return (
                        <View key={index} style={styles.RepoInfoDetails}>
                            <Text>{item}</Text>
                            <View>
                                {
                                    index.map((key, value) => {
                                        return (
                                            <View style={styles.RepoInfo}>
                                                <View><AntDesign name={key.scanned ==1 ? "upload" : "download"} size={15} ><Text style={{marginHorizontal:10, fontSize:15}}>{key.date}</Text></AntDesign></View>
                                                <View><Text style={{fontSize:15}}>{key.scanned}</Text></View>
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
        :
        success?
        <View style={styles.container}>
            <View style={styles.TopHeaders}>
                <TouchableOpacity onPress={handlePressAll}><Text>All</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressIn}><Text style={{fontWeight: 'bold',}}>In</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressOut}><Text>Out</Text></TouchableOpacity>
            </View>
            <Text>Total Successful Transactions : {successTransactionLength}</Text>
            {
                Object.entries(transactionSuccess).map(([item, index]) => {
                    return (
                        <View key={index} style={styles.RepoInfoDetails}>
                            <Text>{item}</Text>
                            <View>
                                {
                                    index.map((key, value) => {
                                        return (
                                            <View style={styles.RepoInfo}>
                                                <View><AntDesign name={key.scanned ==1 ? "upload" : "download"} size={15} ><Text style={{marginHorizontal:10, fontSize:15}}>{key.date}</Text></AntDesign></View>
                                                <View><Text style={{fontSize:15}}>{key.scanned}</Text></View>
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
        : 
        <View style={styles.container}>
            <View style={styles.TopHeaders}>
                <TouchableOpacity onPress={handlePressAll}><Text>All</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressIn}><Text>In</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlePressOut}><Text style={{fontWeight: 'bold',}}>Out</Text></TouchableOpacity>
            </View>
            <Text>Total Unsuccessful Transactions : {unsuccessTransactionLength}</Text>
            {
                Object.entries(transactionUnsuccess).map(([item, index]) => {
                    return (
                        <View key={index} style={styles.RepoInfoDetails}>
                            <Text>{item}</Text>
                            <View>
                                {
                                    index.map((key, value) => {
                                        return (
                                            <View style={styles.RepoInfo}>
                                                <View><AntDesign name={key.scanned ==1 ? "upload" : "download"} size={15} ><Text style={{marginHorizontal:10, fontSize:15}}>{key.date}</Text></AntDesign></View>
                                                <View><Text style={{fontSize:15}}>{key.scanned}</Text></View>
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
        width: '80%',
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
        backgroundColor: '#F1F0F0',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        // margin: 10,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
    },
    TopHeaders: {
        flexDirection: 'row',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        // backgroundColor: '#c59d5f',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        // flex:1
        // margin: 10,
        // borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 }
    },
});

export default Transaction;
