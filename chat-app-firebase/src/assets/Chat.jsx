import React from 'react'
import { logoutHandler } from '../config';

const Chat = () => {
    return (
        <div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Chat