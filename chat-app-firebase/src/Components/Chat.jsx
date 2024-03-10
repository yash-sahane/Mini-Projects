import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import ChatBox from './ChatBox';

const Chat = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <ChatBox />
        </div>
    )
}

export default Chat