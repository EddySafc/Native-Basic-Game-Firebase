// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjylsq6xi-FLclrJdS9PigN0IjYxKishs",
  authDomain: "test-project-5ecf8.firebaseapp.com",
  projectId: "test-project-5ecf8",
  storageBucket: "test-project-5ecf8.appspot.com",
  messagingSenderId: "453485596809",
  appId: "1:453485596809:web:44202a85084664230d7658",
  measurementId: "G-RZWQQ0HFQR",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  //app has not been initialized.
  app = firebase.initializeApp(firebaseConfig);
} else {
  //app has already been initialised.
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
