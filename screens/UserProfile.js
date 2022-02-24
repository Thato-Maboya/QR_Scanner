import { ImageBackground} from 'react-native';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { registration, getUserInfo, getScannerInfo} from '../services';
import { firebase } from '../config/firebaseConfig';



const Profile = ({navigation}) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    const [OTPnumber, setOTPnumber] = useState('');
    const [Idnumber, setIdnumber] = useState('');
    const [SchoolName, setSchoolName] = useState('');
    const [SchoolGrade, setSchoolGrade] = useState('');
    const emptyState = () => {
        setPhonenumber('');
        setOTPnumber('');
        setIdnumber('');
        setSchoolName('');
        setSchoolGrade('');

    };
    const [userDetails, setUserDetails] = useState([]);

    let list = []

    const fetchUser= async => {
        getUserInfo().then((data) => {
           list = data
           console.log(list);
           setUserDetails(list);
        })
     }

     const [scannerDetails, setScannerDetails] = useState([]);

    let listScanned = []

    const fetchScanner= async => {
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

    const handlePress = () => {
        if (!Phonenumber) {
            Alert.alert('Enter your Phone number*.');
        }

       else if (!OTPnumber) {
            Alert.alert('Enter your OTP number*.');
        }

       else if (!Idnumber) {
            Alert.alert('Enter your Id number*.');
        }
        else if (!SchoolName) {
            Alert.alert('Enter your School name*.');
        }

        else if (!SchoolGrade) {
            Alert.alert('Enter your school grade*.');
        


        } else {
            registration(
                Phonenumber,
                OTPnumber,
                Idnumber,
                SchoolName,
                SchoolName,
            );
            navigation.navigate('HomeScreen');
            emptyState();
        }
    };

    return (
        <View style={styles.container}>

<ImageBackground style={styles.imgBackground}
                resizeMode='cover'
                source={require('../assets/wallpaper.jpg')}>

            <Text style={styles.textDesign}>CodeTribe Sanitary Towel</Text>
            <View style={styles.viewDirection}>
            </View>
            <Text style={styles.textDesign3}>Complete Form</Text>

            {
                  userDetails.map((item, index) => {
                     return (
                        <View key={index} style={styles.usernameCenter}>
                           {/* <Text style={styles.username}> {item.firstname}</Text>
                           <Text>{item.email}</Text> */}
                           <TextInput
                                style={styles.fieldText_Design}
                                value={item.firstname}
                                onChangeText={(firstname) => setFirstname(firstname)}
                            
                            />
                            <TextInput
                                style={styles.fieldText_Design}
                                value={item.lastname}
                                onChangeText={(lastname) => setLastname(lastname)}
                            
                            />
                            <TextInput
                                style={styles.fieldText_Design}
                                value={item.email}
                                onChangeText={(email) => setEmail(email)}
                                // editable={false} selectTextOnFocus={false}
                            />
                        </View>
                     )
                  })
               }
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Phone numbers'
                
            />  
            <View style={{ marginTop: 10, marginRight: 5, flexDirection:'row' }}>
                <TouchableOpacity onPress={handlePress}>
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
                 
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Name of the School'
            />
            <TextInput
                style={styles.fieldText_Design}
                placeholder='Grade'
            
            />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
                    <Text>Update</Text>
                </TouchableOpacity>
            </View >
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
     
  
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
    fieldText_Design2: {
        backgroundColor: '#fff',
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
        color: '#FFC0CB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#808080',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton2: {
        height: 40,
        width: 90,
        color: '#FFC0CB',
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#808080',
        borderRadius: 60,
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
export default Profile;
