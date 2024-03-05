import React, { useContext, useEffect } from 'react'
import { auth, logoutHandler } from '../config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SendMessage from './SendMessage';
import { AuthContext } from '../Context/AuthContextProvider';
import SearchUser from './SearchUser';
import ChatBox from './ChatBox';

const Chat = () => {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser);
    const navigate = useNavigate();

    const signoutHandler = async () => {
        try {
            await logoutHandler();
            navigate('/login');
        } catch (e) {
            console.error('Logout failed:', e.message);
        }
    };

    return (
        <div>
            <button onClick={signoutHandler}>Logout</button>
            <img src={currentUser.photoURL} alt="" style={{ width: '50px' }} />
            <p>{currentUser.displayName}</p>
            <SearchUser />
            <ChatBox />
        </div>
    )
}

export default Chat