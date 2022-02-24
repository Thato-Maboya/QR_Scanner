import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../services';

const signUp = ({ navigation }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');

    const handlePress = () => {
        if (!firstname) {
            alert('Enter your Firtsname*.');
        }

        if (!email) {
            alert('Email field is required*.');
        }

        if (!password) {
            alert('Password field is required*.');
        }
        if (!passwordconfirm) {
            alert('Password field is required*.');
        }
        if (firstname && email && password && passwordconfirm) {
            registration(email, password, lastname, firstname);
            navigation.navigate("HomeScreen");

            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordconfirm('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textDesign}>CodeTribe Sanitary</Text>
            <View style={styles.viewDirection}>
                <Image style={styles.img} source={require("../assets/BackGround.png")} />
                <Image style={styles.img} source={require("../assets/BackGround2.png")} />
            </View>
            <Text style={styles.textDesign3}>Let's get started</Text>
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter first name'
                value={firstname}
                onChangeText={(firstname) => setFirstname(firstname)}
            
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter last Name'
                value={lastname}
                onChangeText={(lastname) => setLastname(lastname)}
            
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Enter your email address'
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Password'
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Confirm Password'
                onChangeText={(passwordconfirm) => setPasswordconfirm(passwordconfirm)}
                secureTextEntry={true}
                
            />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                    <Text >Register</Text>
                </TouchableOpacity>
            </View >
            <View style={styles.viewDirection}>
                <Text style={styles.textDesign5}>Have an account sign in ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.textDesign4}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

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
    textDesign: {
        color: '#808080',
        marginBottom: 60,
        fontSize: 30,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#808080',
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
        color: '#808080',
        fontSize: 15,
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
    },



});
export default signUp;
