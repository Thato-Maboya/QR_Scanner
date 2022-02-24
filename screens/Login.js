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
            <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>

            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/BackGround.png")} />
                <Image style={styles.img} source={require("../assets/BackGround2.png")} />
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
                    <Text>Login</Text>
                </TouchableOpacity>
            </View >
            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                <Text style={styles.textDesign5}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={styles.viewDirection}>
                <Text style={styles.textDesign5}>Don't have an account sign up ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                    <Text style={styles.textDesign4}>Sign Up</Text>
                </TouchableOpacity>
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
});

export default Login;
