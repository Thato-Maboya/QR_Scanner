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
                navigation.navigate('Homepage');
                setEmail('');
                setPassword('');
            }
        });

    };
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 74}}>
                {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}
                <Image style={styles.img} source={require("../assets/rose.png")} />
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

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View >
                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                    <Text style={styles.textDesign5}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={styles.viewDirection}>
                    <Text style={styles.textDesign5B}>Not Registered?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.textDesign4}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginLeft: 89,
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

        color: '#000',
        marginBottom: 60, //nb
        fontSize: 30,
        marginLeft: 0,
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 150,
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
        color: '#E46060',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        marginLeft: 150,
        marginTop: 20,
    },
    textDesign5B: {
        color: '#000',
        fontSize: 13,
        // fontFamily: 'brush-script mt',
        
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
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:100,
    },
    viewDirection_a: {
        flexDirection: 'row'
    },
    controlView: {
        marginTop: 350,
    },
});

export default Login;
