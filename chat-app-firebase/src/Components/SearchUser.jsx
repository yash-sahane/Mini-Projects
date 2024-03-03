import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config';

const SearchUser = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

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

    useEffect(() => {
        console.log(user);
        console.log(user?.displayName);
    }, [user])

    return (
        <div>
            <label htmlFor="search">Search User</label>
            <input type="search" name='search' value={username} onKeyDown={keyHandler} onChange={(e) => setUsername(e.target.value)} />
            {user && <>
                <h3>Searched User</h3>
                <img src={user.profileURL} alt="" style={{ width: '50px' }} />
                <p>{user.displayName}</p>
            </>}
        </div>
    )
}

export default SearchUser