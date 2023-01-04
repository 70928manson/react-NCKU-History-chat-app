import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';

import styles from "../styles/components/messages.module.scss";
import { db } from '../utils/firebase';

import Message from "./Message";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    //firestore database chats
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub()
        }
    }, [data.chatId])

    console.log('messages', messages);

    return (
        <div className={styles.messages}>
            {console.log('messages', messages)}
            {messages.length === 0 ? <p>choose a user</p> : <p></p>}
            {messages.map(message => (
                <Message message={message} key={message.id} />
            ))}
            {/* <Message /> */}
        </div>
    );
};

export default Messages;