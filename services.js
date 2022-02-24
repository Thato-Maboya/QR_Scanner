import "firebase/firestore";
import { Alert } from "react-native";
import { firebase } from "./config/firebaseConfig";
require('firebase/auth');
import moment from 'moment'; 


export async function registration(email, password, lastname, firstname) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        const db = firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            lastname: lastname,
            firstname: firstname,
        });

      
    } catch (error) {
        Alert.alert("There is something wrong!!!", error.message);
        console.log(error.message);
    }
}
export async function signIn(email, password) {  
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
        console.log(err.message);
    }
}

export async function addProfile(Profile) {
    try {
        const currentUser = firebase.auth().currentUser;
        const db = firebase.firestore();
        db.collection("UserProfile")
            .add({
                userID: currentUser.uid,
                Profile: Profile,
                status: 'update',
            });     

    } catch (error) {
        console.log(error);
    }
}




export async function getProfile() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        //const db = firebase.firestore()
        let doc = await firebase
            .firestore()
            .collection("userProfile")
            .where("userID", "==", currentUser?.uid)
            .get()

        if (doc) {
            doc.forEach((docs) => {
                dataObj.push({ ...docs.data()})
            })

        } else {
            console.log("no record");
        }

    } catch (error) {
        console.log(error);
    }
    
    console.log(dataObj);
    return dataObj
}
// export async function getUserInfo() {
//     let dataObj = []
//     const currentUser = firebase.auth().currentUser;
//     let doc = await firebase.firestore().collection('userProfile').doc(currentUser?.uid).get();
    
//     dataObj.push({ ...doc.data() })
//     console.log(dataObj);
//     return dataObj

//  }


 export async function getUpdateProfile() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)
        let doc = await firebase.firestore()
        .collection("userProfile")
        .where("userID", "==", currentUser?.uid)
        .where("status", "==", "update").get()
        console.log(doc)
        
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                let docID = docs.id
                dataObj.push({...docs.data(), ['id']: docID})
                console.log(dataObj)
            })

        } else{
            console.log("no record");
        }

    } catch (error) {
        alert("There is something wrong while getting the task!!!", error.message);
        console.log(error.message);
    }

    console.log(dataObj);
    return dataObj
}






export async function resetPassword(email) {
    try {
        //const user = firebase.auth().currentUser;

        firebase.auth().sendPasswordResetEmail(email).then(() => {
            // Password reset email sent
            console.log("Password reset email sent");
        })

            // console.log("rest button clicked")

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    } catch (error) {
        console.log(error.message)
    }
}

//Fetching the current user
export async function getUserInfo() {
    let dataObj = []
    const currentUser = firebase.auth().currentUser;
    let doc = await firebase.firestore().collection('users').doc(currentUser?.uid).get();
    
    dataObj.push({ ...doc.data() })
    console.log(dataObj);
    return dataObj

 }

 //Adding the scanner value to the DB
 export async function addScanner(scanner) {
    try {
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        
        db.collection("scanner").add({
            userID: currentUser.uid,
            scanned: 1,
        });
    } catch (error) {
        alert("There is something wrong while adding a scanner!!!", error.message);
        console.log(error.message);
    }
}

//Fetching the current user
export async function getScannerInfo() {
    let dataObj = []

    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)

        let doc = await firebase.firestore().collection("scanner").where("userID", "==", currentUser?.uid).get()
        console.log(doc)
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                console.log(docs.data().date);
                console.log(moment().format("YYYY-MM-DD"));
                let docID = docs.id;
                let userDayDiff = moment(moment().format("YYYY-MM-DD")).diff(moment(docs.data().date), 'days');
                dataObj.push({...docs.data(), ['id']: docID, ['userDayScanned']: userDayDiff})
                console.log(dataObj)
                
            })
        } else{
            console.log("no record");
        }
    } catch (error) {
        alert("There is something wrong while getting the scanner data!!!", error.message);
        console.log(error.message);
    }
    console.log(dataObj.length);
    return dataObj

 }
