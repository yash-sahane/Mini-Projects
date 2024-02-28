import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqVP706qbNiSrPEfJYPMA0WZATm1VrYvI",
    authDomain: "fir-297ec.firebaseapp.com",
    projectId: "fir-297ec",
    storageBucket: "fir-297ec.appspot.com",
    messagingSenderId: "113257914255",
    appId: "1:113257914255:web:21d832ef1a1b3de87475fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };