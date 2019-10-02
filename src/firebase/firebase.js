// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyB1ytmBoQQEZ73dzYw0jc7WXwq0WNhJZ24",
    authDomain: "zeal-fire-chat.firebaseapp.com",
    databaseURL: "https://zeal-fire-chat.firebaseio.com",
    projectId: "zeal-fire-chat",
    storageBucket: "zeal-fire-chat.appspot.com",
    messagingSenderId: "421159306874",
    appId: "1:421159306874:web:37099d74f51e7913149dc3",
    measurementId: "G-XTGLTBN25W"
};


const firebaseApp =  firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();
export default firebaseApp.firestore();
