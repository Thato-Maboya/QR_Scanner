import { StatusBar } from 'expo-status-bar';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import profiles from '../assets/profiles.png';
import { useRef, useState, useEffect } from 'react';
//Tab icons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import Notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
//Menu
import menu from '../assets/mainM.png';
import close from '../assets/close.png';
import {getUserInfo, loggingOut} from '../services';

//Photo 
import photo from '../assets/photo.jpg';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
const HomePage = ({ navigation }) => {
    const [currentTab, setCurrentTab] = useState("Welcome");
    //To get the current state menu
    const [showMenu, setShowMenu] = useState(false);
    //animated  properties
    const offstValue = useRef(new Animated.Value(0)).current;
    //scale initial must be
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const [fullname, setFullname] = useState('');

    //navigation to profile page
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    }

    const handlePressScanner = () => {
        navigation.navigate('Scanner');
    }
    const handlePressTransaction = () => {
        navigation.navigate('Transaction');
    }

    const handlePressLogOut = () => {
        loggingOut().then(
           navigation.navigate('Login')
        )
     };

    let list = []

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            setFullname(list[0].fullname);
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'flex-start', padding: 15 }}>
                <Image source={profiles} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    marginTop: 8,
                }}></Image>
                {/* <ActivityIndicator size="large" color="#00ff00" /> */}
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#E46060',
                    marginTop: 20,
                }}>{fullname}</Text>
                <TouchableOpacity onPress={handlePressProfile}>
                    <Text style={{
                        marginTop: 6,
                        color: '#E46060',
                    }}>View Profiles</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:20}}>
                    <Feather name="home" size={24} color="#fff"  ><View style={{marginHorizontal:10}}>Home</View></Feather>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="#fff" ><View style={{marginHorizontal:10}}>Search</View></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressTransaction}>
                    <MaterialCommunityIcons name="transfer" size={24} color="#fff" ><View style={{marginHorizontal:10}}>Transaction</View></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="settings" size={24} color="#fff" ><View style={{marginHorizontal:10}}>Setting</View></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressLogOut}>
                    <AntDesign name="logout" size={24} color="#fff" ><View style={{marginHorizontal:10}}>LogOut</View></AntDesign>
                </TouchableOpacity>
            </View>
            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: "#fff",
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                paddingVertical: 20,
                borderRadius: showMenu ? 15 : 0,
                //Transfoming View
                transform: [
                    { scale: scaleValue },
                    { translateX: offstValue }
                ]
            }}>
                {
                    // Menu button
                }

                <Animated.View style={{
                    transform: [{
                        translateY: closeButtonOffset
                    }]
                }}>
                    <Animated.View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            //do action more
                            //scaling the view
                            Animated.timing(scaleValue, {
                                toValue: showMenu ? 1 : 0.88,
                                duration: 300,
                                useNativeDriver: true
                            })
                                .start()

                            Animated.timing(offstValue, {
                                toValue: showMenu ? 0 : 220,
                                duration: 300,
                                useNativeDriver: true
                            })
                                .start()

                            Animated.timing(closeButtonOffset, {
                                //random values
                                toValue: showMenu ? -30 : 0,
                                duration: 300,
                                useNativeDriver: true
                            })
                                .start()
                            setShowMenu(!showMenu);
                        }} style={{ flexDirection: 'row' }}>
                            <Image source={showMenu ? close : menu} style={{
                                width: 30,
                                height: 30,
                                tintColor: 'black',
                                marginTop: 15
                            }}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 305, marginTop: 20 }}>
                            <Feather name="camera" size={24} color="grey" onPress={handlePressScanner} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#131112',
                        paddingTop: 20,
                    }}>
                        {currentTab}
                    </Text>
                    <Image style={{
                        width: 300,
                        height: 250,
                        borderRadius: 15,
                        marginTop: 20,
                        marginLeft: 30,
                        resizeMode: 'cover',
                        backgroundColor: '#131112',

                    }}>
                    </Image>

                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 35, fontSize: 15, color: '#B80E0E', marginLeft:35 }}>
                            Expense History
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 35, fontSize: 15, color: '#B80E0E', marginLeft:110 }}>
                            View All
                        </Text>
                    </View>


                </Animated.View>
            </Animated.View>
        </SafeAreaView>
    );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (
        <TouchableOpacity onPress={() => {
            if (title == "LogOut") {
                //log out function
            } else {
                setCurrentTab(title)
            }
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 8,
                backgroundColor: currentTab == title ? '#fff' : 'transparent',
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: 15,
            }}>

                <Image source={image} style={{
                    width: 25, height: 25,

                    //  tintColor: currentTab == title ? "#5359D1" : "#fff"
                }}></Image>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    color: currentTab == title ? "#B80E0E" : "#fff"
                }}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2F3E',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});

export default HomePage;