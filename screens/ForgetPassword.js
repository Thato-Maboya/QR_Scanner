import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const reset = () => {
        resetPassword(email)
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/rose.png")} />
                {/* <Image style={styles.img} source={require("../assets/BackGround2.png")} /> */}
            </View>
            <Text style={styles.textDesign3}>Forgot password</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter your email address'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TouchableOpacity onPress={reset} style={styles.loginButton}>
                <Text>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    img: {
        height: 150,
        width: 70,
        marginBottom: 70, //nb
        borderRadius: 10,
       
    },
    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textDesign: {
        color: '#808080',
        fontSize: 30,
        marginBottom: 80,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 150,
        marginBottom: 20,
    },
    textDesign4: {
        color: '#FFFFFF',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginLeft: 0,
        marginTop: 20,
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
        // marginTop:100,
    },
    viewDirection2: {
        flexDirection: 'row',
        marginLeft: 140,
    },
    controlView: {
        marginTop: 350,
    },
});
export default ForgetPassword;
