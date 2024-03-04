import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { db } from '../config';

const Chats = () => {
    const [chats, setChats] = useState({});
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data());
                console.log(Object.entries(doc.data()));
            });

            return () => unsub();
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    return (
        <div>
            {Object.entries(chats)?.map((chat) => (
                <div key={chat[0]}>
                    <img src={chat[1].userInfo.photoURL} alt="" style={{ width: '50px' }} />
                    <p>{chat[1].userInfo.displayName}</p>
                </div>
            ))}
        </div>
    );
};

export default Chats;
