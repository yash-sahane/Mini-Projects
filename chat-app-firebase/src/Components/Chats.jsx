import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { db } from '../config';
import { ChatContext } from '../Context/ChatContextProvider';

const Chats = () => {
    const [chats, setChats] = useState({});
    const { currentUser } = useContext(AuthContext);
    const { data, dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data());
                // console.log(Object.entries(doc.data()));
            });

            return () => unsub();
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const addChatHandler = (user) => {
        console.log(user);
        dispatch({ type: 'CHANGE_USER', payload: user });
    }

    return (
        <div>
            {Object.entries(chats)?.map((chat) => (
                <div key={chat[0]} onClick={() => addChatHandler(chat[1].userInfo)}>
                    <img src={chat[1].userInfo?.photoURL} alt="" style={{ width: '50px' }} />
                    <p>{chat[1].userInfo?.displayName}</p>
                    <p>{chat[1].lastMessage?.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Chats;
