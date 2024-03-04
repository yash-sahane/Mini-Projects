import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';
import { db } from '../config';

const SearchUser = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const { currentUser } = useContext(AuthContext);

    const searchUser = async () => {
        const q = query(collection(db, 'users'), where('displayName', '==', username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            })
        } catch (e) {
            console.error(e);
        }
    }

    const keyHandler = (e) => {
        e.code === "Enter" && searchUser();
    }

    const userClickHandler = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        console.log(currentUser.uid);
        console.log(user.uid);

        try {
            const res = await getDoc(doc(db, 'chats', combinedId));
            if (!res.exists()) {
                await setDoc(doc(db, 'chats', combinedId), { messages: [] })

                // create chat between user and currentUser
                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedId + '.userInfo']: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + '.data']: serverTimestamp()
                })

                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedId + '.userInfo']: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + '.data']: serverTimestamp()
                })
            }

            setUser(null);
            setUsername('')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <label htmlFor="search">Search User</label>
            <input type="search" name='search' value={username} onKeyDown={keyHandler} onChange={(e) => setUsername(e.target.value)} />
            {user && <div onClick={userClickHandler}>
                <h3>Searched User</h3>
                <img src={user.profileURL} alt="" style={{ width: '50px' }} />
                <p>{user.displayName}</p>
            </div>}
        </div>
    )
}

export default SearchUser