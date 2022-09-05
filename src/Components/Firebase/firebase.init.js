import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmXIFRLvhUq8ILvygMJRxuUz3gfaPyL58",
    authDomain: "langzila-52273.firebaseapp.com",
    projectId: "langzila-52273",
    storageBucket: "langzila-52273.appspot.com",
    messagingSenderId: "860824367778",
    appId: "1:860824367778:web:f4781261202e26dc2a1dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;