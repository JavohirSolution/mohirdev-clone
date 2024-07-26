// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsdxz9mB045MSITVsefcCpV71-KsnSUeI",
    authDomain: "mohirdev-clone-react.firebaseapp.com",
    projectId: "mohirdev-clone-react",
    storageBucket: "mohirdev-clone-react.appspot.com",
    messagingSenderId: "28238546831",
    appId: "1:28238546831:web:1e56c2352d4fd6e3f86dfa",
    measurementId: "G-QQR2V1WEVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;