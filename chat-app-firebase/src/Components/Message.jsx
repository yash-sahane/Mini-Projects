import React, { useContext } from 'react'
import {
    AuthContext, AuthContextProvider
} from '../Context/AuthContextProvider';
import { calculateTimeAgo } from '../Util/TimeAgo';
import './Message.css';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    console.log(message);

    return (
        <div className={`msg_wrapper ${message.senderId === currentUser.uid ? 'ownerMsg' : ''}`}>
            <div className='msg_txt_div' >
                <p className='mst_txt'>
                    {message.text}
                </p>
            </div>
            <div>
                {message.date && <p>{calculateTimeAgo(message.date)}</p>}
            </div>
        </div>
    )
}

export default Message