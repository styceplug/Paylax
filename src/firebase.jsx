// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDu9ip2cN_VCbUv9dHeYjUo_JflaIsakcg",
    authDomain: "escrow-f5933.firebaseapp.com",
    projectId: "escrow-f5933",
    storageBucket: "escrow-f5933.appspot.com",
    messagingSenderId: "1009282368630",
    appId: "1:1009282368630:web:97a033a6df370d30770b57",
    measurementId: "G-RN7HRYBTNY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
