import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../config/firebaseConfig';
import { signIn } from '../services';
require('firebase/auth')

const ScannedSuccessful = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/qakaz.png")} />
                {/* <Image style={styles.img} source={require("../assets/BackGround2.png")} /> */}
            </View>
            <Text style={styles.fieldTextDesign}>SUCCESSFUL</Text>
            <Text style={styles.fieldText_Design}>
                You can now take your
            </Text>
            <Text style={styles.fieldText_Design}>
                package.
            </Text>
            
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                  <Text>DONE</Text>
              </TouchableOpacity>
          </View >
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',


    },
    fieldTextDesign: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fieldText_Design: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFC0CB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#E46060',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textDesign: {
        color: '#000',
        marginBottom: 60,
        fontSize: 30,
        marginRight: 3,
        // fontFamily: 'brush-script mt',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 147,
        marginTop: 20,
        marginBottom: 20,

    },
    textDesign4: {
        color: '#E46060',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    textDesign5: {
        color: '#808080',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    viewDirection: {
        flexDirection: 'row',
        // marginTop:100,
    },
    img: {
        height: 150,
        width: 150,
        marginBottom: 50,
        borderRadius: 10,
        marginTop: 50,
        // marginRight:3,
    },
});

export default ScannedSuccessful;
