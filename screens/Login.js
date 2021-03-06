import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../config/firebaseConfig';
import { signIn } from '../services';
require('firebase/auth')

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }

        signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            if (user) {
                console.log(user)
                navigation.navigate('Home');
                setEmail('');
                setPassword('');
            }
        });

    };
    return (
        <View style={styles.container}>
            {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/1.png")} />
                {/* <Image style={styles.img} source={require("../assets/BackGround2.png")} /> */}
            </View>
            <Text style={styles.textDesign3}>Welcome Back</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter your email address'
                value={email}
                onChangeText={(email) => setEmail(email)} />

            <TextInput
                style={styles.fieldText_Design}
                placeholder='Password' value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true} />
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold' }}>Login</Text>
              </TouchableOpacity>
          </View >

            <View style={{ marginTop: 10,paddingLeft: 100 }}>
                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            </View >

            <View style={styles.viewDirection}>
                <Text style={styles.textDesign5}>Not Registered?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.textDesign4}>Sign Up</Text>
                </TouchableOpacity>
            </View>

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
    fieldText_Design: {
        backgroundColor: '#F1F0F0',
        width: 250,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    loginButton: {
        height: 40,
        width: 250,
        color: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#BF4158',
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

export default Login;
