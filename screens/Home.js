import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import { getUserInfo, loggingOut } from '../services';
import { useRef, useState, useEffect } from 'react';
 
const Home = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    //navigation to profile page
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    }
    const handlePressHome = () => {
        navigation.navigate('Home');
    }

    const handlePressScanner = () => {
        navigation.navigate('Scanner');
    }
    const handlePressTransaction = () => {
        navigation.navigate('Transaction');
    }
    const handlePressTransactionTester = () => {
        navigation.navigate('Transactions');
    }

    const handlePressLogOut = () => {
        loggingOut().then(
            navigation.navigate('Login')
        )
    };

    let list = []

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            setFullname(list[0].fullname);
        })
    }
    const moment = require('moment');
    let now = moment();
    const today = now.format("dddd, MMMM Do YYYY");

    useEffect(() => {
        fetchUser()
    }, [])
    
    return (
        <View style={styles.container}>

            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(191,65,88)', marginTop: 5, height: '75%' }}>
                <Text style={styles.lgBtn2}>{today}</Text>
                <View style={styles.MainContainer}>
                    <View style={{
                        width: 300,
                        height: 300,
                        borderRadius: 300 / 2,
                        backgroundColor: 'rgb(191,65,88)',
                        borderWidth: 8,
                        borderColor: '#FFFFFF',
                        padding: 10
                    }}>
                        <Text style={{ textAlign: 'center', alignItems: 'center', fontSize: 20, marginTop: 40, color: '#FFFFFF' }}>
                            Hello
                        </Text>
                        <View style={{ flex: 1, borderBottomWidth: 1, height: '1%', backgroundColor: '#FFFFFF', marginTop: 40 }} />
                        <Text style={{ textAlign: 'center', marginBottom: 40, marginTop: 40, fontSize: 20, alignItems: 'center', color: '#FFFFFF' }}>
                            {fullname}
                        </Text>
                    </View>
                    <Text onPress={handlePressScanner} style={styles.lgBtn1}>Scan to Redeem</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handlePressHome}>
                    <Text style={styles.lgBtn}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handlePressProfile}>
                    <Text style={styles.lgBtn}>View Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row',}}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handlePressTransactionTester}>
                    <Text style={styles.lgBtn}>View Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={handlePressLogOut}>
                    <Text style={styles.lgBtn}>LogOut</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',


    },
    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        //borderWidth: 2,
        width: 280,
        height: 150,
        borderRadius: 280 / 2,
    },
    lgBtn: {
        height: 40,
        width: 120,
        color: '#000000',
        fontWeight: 'bold',
        backgroundColor: '#D3D3D3',
        borderRadius: 15,
        alignItems: 'center',
        textAlignVertical: "center",
        textAlign: 'center',
        //marginTop: 20,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 10

    },
    lgBtn1: {
        height: 60,
        width: 250,
        color: '#FFC0CB',
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderColor: '#FFC0CB',
        //borderColor: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: "center",
        borderWidth: 2,
        marginBottom: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 20,
        marginTop: 20,
        // marginBottom: 100


    },
    lgBtn2: {
        //height: 60,
        //width: 300,
        color: '#FFFFFF',
        fontWeight: 'bold',
        //borderRadius: 15,
        //borderColor: 'pink',
        //borderColor: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: "center",
        //borderWidth: 2,
        marginTop: 20,
        paddingHorizontal: 100,
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 15,

    },
    input: {
        margin: 5,
        height: 40,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    TxtWeight: {

        fontSize: 30,
        paddingBottom: 50,
        color: '#db00b6',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Helvetica',


    },
    image: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,.6)'



    },
    Design: {
        color: '#FFFFFF',
        fontSize: 12,
        marginRight: 5,
        marginTop: 51,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        justifyContent: 'center',
        letterSpacing: 1,

    },
    Design1: {
        color: '#db00b6',
        fontSize: 15,
        fontFamily: 'arial',
        marginRight: 5,
        marginTop: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },
    a: {
        flex: 1,
        //background:' rgba(191,65,88)',
        //'linear-gradient:(333deg,(rgba(191,65,88,1)54%,  rgba(232,148,168,1)86%,rgba(246,215,213,1)100%))',
        borderRadius: 20,
        width: 400,
        height: 300, justifyContent: 'center',
        alignItems: 'center',
        //background: `linear-gradient( rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
    },

});
export default Home;