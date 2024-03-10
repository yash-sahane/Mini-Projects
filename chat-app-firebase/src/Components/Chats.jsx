import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { db } from '../config';
import { ChatContext } from '../Context/ChatContextProvider';
import './Chats.css';
import SearchUser from './SearchUser';
import UserProfile from './UserProfile';

const Chats = () => {
    const [chats, setChats] = useState({});
    const { currentUser } = useContext(AuthContext);
    const { data, dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data());
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
        <div className='chats'>
            <UserProfile />
            <SearchUser />
            <div className='users_chats'>
                {Object.entries(chats)?.sort((a, b) => a[1].date - b[1].date).map((chat) => (
                    <div className='users_chat' key={chat[0]} onClick={() => addChatHandler(chat[1].userInfo)}>
                        <span className='users_chat_vr'></span>
                        <div className='users_chat_info'>
                            <div className='profile_img_div'>
                                <img src={chat[1].userInfo?.photoURL} alt="" className='user_profile_img' />
                            </div>
                            <p>{chat[1].userInfo?.displayName}</p>
                        </div>
                        <p className='users_chat_lastMsg'>{'> ' + chat[1].lastMessage?.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chats;
