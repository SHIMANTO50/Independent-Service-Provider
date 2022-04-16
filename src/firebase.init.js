// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD6yEMkvy5C2Xf2hliEFgP2bVHLEVHXew",
    authDomain: "independent-service-prov-8beb0.firebaseapp.com",
    projectId: "independent-service-prov-8beb0",
    storageBucket: "independent-service-prov-8beb0.appspot.com",
    messagingSenderId: "509119052868",
    appId: "1:509119052868:web:b959286944388df51e1011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;