import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBhfZZksNtxyC0_VdJIaDC0EGQCR3zflOk",
    authDomain: "vending-machine-8a200.firebaseapp.com",
    projectId: "vending-machine-8a200",
    storageBucket: "vending-machine-8a200.appspot.com",
    messagingSenderId: "614664161325",
    appId: "1:614664161325:web:5938d7e0ddfd99ff8bd0a4",
    measurementId: "G-38NSHS8M4N"
  };

firebase.initializeApp(firebaseConfig);
export { firebase };


