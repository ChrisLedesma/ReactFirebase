import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyB98I9R-NfJ13450bA4g9eCZZdqvMgEHlM",
  authDomain: "react-firebase-tutorial-b651d.firebaseapp.com",
  projectId: "react-firebase-tutorial-b651d",
  storageBucket: "react-firebase-tutorial-b651d.appspot.com",
  messagingSenderId: "320289313954",
  appId: "1:320289313954:web:64055916af17bb9b8c33fb",
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;