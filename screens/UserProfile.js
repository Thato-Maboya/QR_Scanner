import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { updateUserDetails, getUserInfo, getScannerInfo } from '../services';
import { firebase } from '../config/firebaseConfig';



const Profile = ({ navigation }) => {

    const [fullname, setFullname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [OTPnumber, setOTPnumber] = useState('');
    const [idnumber, setIdnumber] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [grade, setGrade] = useState('');
    const [id, setId] = useState('');
    // const emptyState = () => {
    //     setPhonenumber('');
    //     setOTPnumber('');
    //     setIdnumber('');
    //     setSchoolName('');
    //     setSchoolGrade('');

    // };
    const [userDetails, setUserDetails] = useState([]);

    let list = []

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            console.log(list);
            setUserDetails(list);
            setPhonenumber(list[0].Phonenumber);
            setFullname(list[0].fullname);
            setEmail(list[0].email);
            setIdnumber(list[0].Idnumber);
            setSchoolName(list[0].SchoolName);
            setGrade(list[0].grade);
            setId(list[0].id);
        })
    }
    console.log(fullname)

    const [scannerDetails, setScannerDetails] = useState([]);

    let listScanned = []

    const fetchScanner = async => {
        getScannerInfo().then((data) => {
            listScanned = data
            console.log(list);
            setScannerDetails(list);
        })
    }

    useEffect(() => {
        fetchUser()
        fetchScanner()
    }, [])

    const handlePressUpdate = (id, fullname, email, phonenumber, idnumber, schoolName, grade) => {
        //     if (!email) {
        //         Alert.alert('Enter your Phone number*.');
        //     }

        //    else if (!fullname) {
        //         Alert.alert('Enter your OTP number*.');
        //     } else {
        //         updateUserDetails(id, fullname, email, phonenumber, idnumber, schoolName, grade);
        //         navigation.navigate('Homepage');
        //     }
        updateUserDetails(id, fullname, email, phonenumber, idnumber, schoolName, grade);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>

            {/* <Text style={styles.textDesign}>CodeTribe Sanitary Towel</Text> */}
            <View style={styles.viewDirection}>
            </View>
            <Text style={styles.textDesign3}>Complete Form</Text>

            <View style={styles.usernameCenter}>
                {/* <Text style={styles.username}> {item.firstname}</Text>
                           <Text>{item.email}</Text> */}
                <TextInput
                    style={styles.fieldText_Design}
                    value={fullname}
                    onChangeText={(fullname) => setFullname(fullname)}
                //  editable={false} selectTextOnFocus={false}

                />
                <TextInput
                    style={styles.fieldText_Design}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                //  editable={false} selectTextOnFocus={false}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Phone numbers'
                    value={phonenumber}
                    editable
                    onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
                />
                <View style={{ marginTop: 10, marginRight: 5, flexDirection: 'row' }}>
                    <TouchableOpacity >
                        <Text style={styles.loginButton2}>Verify</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.fieldText_Design2}
                        placeholder='OTP Number'
                    />
                </View >

                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='ID Number'
                    value={idnumber}
                    editable
                    onChangeText={(idnumber) => setIdnumber(idnumber)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Name of the School'
                    value={schoolName}
                    editable
                    onChangeText={(schoolName) => setSchoolName(schoolName)}
                />
                <TextInput
                    style={styles.fieldText_Design}
                    placeholder='Grade'
                    value={grade}
                    editable
                    onChangeText={(grade) => setGrade(grade)}
                />
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => handlePressUpdate(id, fullname, email, phonenumber, idnumber, schoolName, grade)} style={styles.loginButton}>
                        <Text style={{color: '#FFFFFF', fontWeight: 'bold' }}>Update</Text>
                    </TouchableOpacity>
                </View >
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
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
    fieldText_Design2: {
        backgroundColor: '#F1F0F0',
        width: 150,
        height: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 0,

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
    },
    loginButton2: {
        height: 40,
        width: 90,
        color: '#FFC0CB',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#808080',
        borderRadius: 10,
        marginRight: 5,
    },
    textDesign: {
        color: '#000',
        marginBottom: 60,
        fontSize: 30,
        // fontFamily: 'brush-script mt',
    },
    textDesign3: {
        color: '#000',
        fontSize: 15,
        // fontFamily: 'brush-script mt',
        marginRight: 135,
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
export default Profile;
