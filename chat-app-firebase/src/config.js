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

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
const storage = getStorage(app);

// only passing email and pass from Login component and with the help of auth using signIn function provided by firebase to login
const logInWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

// register user into auth and add extra info about user 
const registerWithEmailAndPassword = async (userInfo) => {
    try {
        const { firstName, lastName, displayName, email, pass: password, avatar } = userInfo;
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if (avatar) {
            console.log(avatar);
            await uploadAvatar(displayName, avatar);
        }

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            displayName,
            authProvider: "local",
            email,
        });
    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}

const uploadAvatar = async (displayName, avatarFile) => {
    const storageRef = ref(storage, `avatars/${displayName}`);

    // Upload the file
    await uploadBytes(storageRef, avatarFile);

    // Get the download URL
    const downloadURL = await getDownloadURL(storageRef);

    // Update the user's avatar URL in the Firestore database
    console.log('Avatar uploaded successfully:', downloadURL);
};

const logoutHandler = async () => {
    const confirmLogout = window.confirm('Are you sure want to logout ?');
    if (confirmLogout) {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e.message);
        }
    }
}

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logoutHandler };