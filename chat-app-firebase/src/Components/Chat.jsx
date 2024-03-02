import React, { useEffect } from 'react'
import { auth, logoutHandler } from '../config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SendMessage from './SendMessage';

const Chat = () => {
    const [user, loading, error] = useAuthState(auth);
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
            <SendMessage />
        </div>
    )
}

export default Chat