import React, { useContext } from 'react'
import { ChatContext } from '../Context/ChatContextProvider'
import Messages from './Messages';
import SendMessage from './SendMessage';

const ChatBox = () => {
    const { data } = useContext(ChatContext);

    return (
        <div>
            <h2>{data?.user.displayName}</h2>
            <Messages />
            <SendMessage />
        </div>
    )
}

export default ChatBox