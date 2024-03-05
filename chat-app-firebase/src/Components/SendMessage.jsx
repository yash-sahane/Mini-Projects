import { Timestamp, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { auth, db, storage } from '../config';
import { ChatContext } from '../Context/ChatContextProvider';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../Context/AuthContextProvider';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (file) {
            const storageRef = ref(storage, uuid());
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            await updateDoc(doc(db, 'chats', data.chatID), {
                messages: arrayUnion({
                    id: uuid(),
                    text: message,
                    senderId: currentUser.uid,
                    timestamp: Timestamp.now(),
                    file: downloadURL,
                }),
            });
        } else {
            await updateDoc(doc(db, 'chats', data.chatID), {
                messages: arrayUnion({
                    id: uuid(),
                    text: message,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [data.chatID + '.lastMessage']: { message },
            [data.chatID + '.date']: serverTimestamp()
        })

        await updateDoc(doc(db, 'userChats', data.user.uid), {
            [data.chatID + '.lastMessage']: { message },
            [data.chatID + '.date']: serverTimestamp()
        })

        setMessage('');
        setFile(null);
    };

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="messageInput">Enter message</label>
                <input type="text" name="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} />
                <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default SendMessage;
