import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../services';
import { ImageBackground } from 'react-native-web';
import { Dimensions } from 'react-native';
const SignUp = ({ navigation }) => {
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
            navigation.navigate("Homepage");

            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordconfirm('');
        }
    };

    return (
        <View style={styles.container}>  
                {/* <Text style={styles.textDesign}>CodeTribe Sanitary</Text> */}

                <View style={styles.viewDirection}>
                    <Image style={styles.img} source={require("../assets/rose.png")} />
                    {/* <Image style={styles.img} source={require("../assets/BackGround2.png")} /> */}
                </View>
                <Text style={styles.textDesign3}>Let's get started</Text>
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Enter full name'
                    value={firstname}
                    onChangeText={(firstname) => setFirstname(firstname)}

                />
                {/* <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Enter last Name'
                    value={lastname}
                    onChangeText={(lastname) => setLastname(lastname)}

                /> */}
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
                    <Text style={styles.textDesign5}>Registered?</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
         
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
        marginRight:3,
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
        width: 70,
        marginBottom: 50,
        borderRadius: 10,
        marginRight:3,
    },



});
export default SignUp;
