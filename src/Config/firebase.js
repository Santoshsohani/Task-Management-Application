// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore"

// Set authentication state persistence to 'local'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAMMFip10UiNhfQKJ7Np2AmK98boCswIJs",
    authDomain: "task-management-applicat-2d0ea.firebaseapp.com",
    projectId: "task-management-applicat-2d0ea",
    storageBucket: "task-management-applicat-2d0ea.appspot.com",
    messagingSenderId: "538565792420",
    appId: "1:538565792420:web:77721ed6445da459998c31",
    measurementId: "G-ZP63PKFX1P"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_AUTHDOMAIN,
//     authDomain: process.env.REACT_APP_PROJECTID,
//     projectId: process.env.REACT_APP_STORAGEBUCKET,
//     storageBucket: process.env.REACT_APP_MESSAGESENDERID,
//     messagingSenderId: process.env.REACT_APP_APPID,
//     appId: process.env.REACT_APP_APPID,
//     measurementId: process.env.REACT_APP_MEASUREMENTID,
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


// Listen for changes in authentication state
