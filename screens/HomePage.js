import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';
import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const reset = () => {
        resetPassword(email)
        navigation.navigate("Login")
    }

    const handlePressScanner = () => {
        navigation.navigate('Scanner');
    }

    const handlePressProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <View style={styles.controlView}>
                <View style={styles.viewDirection}>
                    <TouchableOpacity>
                        <Feather style={styles.iconDesign} name="camera" size={24} color="#FFFFFF" onPress={handlePressScanner} />
                    </TouchableOpacity>
                    <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>
                    <TouchableOpacity>
                        <AntDesign style={styles.cameraiconDesign} name="user" size={24} color="#FFFFFF" onPress={handlePressProfile} />
                    </TouchableOpacity>
                </View>
                <View horizontal={true} style={styles.viewDirection2}>
                    <View style={styles.img} />
                </View >

                <View style={styles.textDesign3}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20, }}>Category</Text>
                </View>

                <View style={styles.viewDirection}>
                    <TouchableOpacity style={styles.textDesign4}>
                        <Text style={{ color: '#FFFFFF', }}>Donate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textDesign4}>
                        <Text style={{ color: '#FFFFFF', }}>Claim coupons</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewDirection}>
                    <TouchableOpacity style={styles.textDesign4}>
                        <Text style={{ color: '#FFFFFF', }}>Track Record</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textDesign4}>
                        <Text style={{ color: '#FFFFFF', }}>Q and A (guidance)</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconDesign: {
        marginRight: 34,
    },
    cameraiconDesign: {
        marginLeft: 34,
    },
    loginButton: {
        height: 30,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: '#808080',
        borderRadius: 60,
        marginTop: 10,
    },
    img: {
        height: 200,
        width: 300,
        marginBottom: 0,
        backgroundColor: '#808080',
        borderRadius: 10,
    },
    img2: {
        height: 140,
        width: 140,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#808080',
        borderRadius: 10,
    },
    fieldText_Design: {
        backgroundColor: '#fff',
        width: 250,
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    textDesign: {
        color: '#FFFFFF',
        fontSize: 20,
        // fontFamily: 'brush-script mt',
        marginTop: 5,
    },
    textDesign3: {
        // fontFamily: 'brush-script mt',
        // marginRight: 0,
        marginTop: 20,
        // paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign4: {
        color: '#FFFFFF',
        borderRadius: 10,
        // paddingVertical: 65,
        // paddingHorizontal: 20,
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: '#808080',
        height: 140,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign5: {
        color: '#808080',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    signUpText_Design: {
        color: '#808080',
        marginTop: 55,
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        // marginBottom:100,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewDirection2: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlView: {
        marginBottom: 20,
    },
});

export default HomePage;
