import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../config';

const SendMessage = () => {
    const [message, setMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        // if (message.trim() === '') {
        //     console.log('enter valid message');
        //     return;
        // }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        setMessage('');
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="messageInput">Enter message</label>
                <input type="text" name='messageInput' value={message} onChange={(e) => setMessage(e.target.value)} />
                <input type="file" name='file' />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage