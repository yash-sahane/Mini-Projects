import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4eiRdQW9SNWVAJt3koiWRm_Mcg27KWi8",
    authDomain: "chat-app-8ade4.firebaseapp.com",
    projectId: "chat-app-8ade4",
    storageBucket: "chat-app-8ade4.appspot.com",
    messagingSenderId: "454141254722",
    appId: "1:454141254722:web:0b2b583e1e1070abd9e1db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// only passing email and pass from Login component and with the help of auth using signIn function provided by firebase to login
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (userInfo) => {
    try {
        const { firstName, lastName, userName, email, pass: password } = userInfo;
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        console.log(user);
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            userName,
            authProvider: "local",
            email,
        });
    } catch (e) {
        console.error(e);
        alert(e.message);
    }

}

const logoutHandler = () => {
    signOut(auth);
}

export { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, logoutHandler };