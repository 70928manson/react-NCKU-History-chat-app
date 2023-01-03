import { doc, onSnapshot } from 'firebase/firestore';
import React, { useCallback, useContext, useEffect, useState } from 'react';
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
            doc.exits() && setMessages(doc.data().messages)
        })

        return () => {
            unSub()
        }
    }, [data.chatId])

    console.log('messages', messages);

    return (
        <div className={styles.messages}>
            {messages.map(message => {
                <Message message={message} key={message.id} />
            })}
            {/* <Message /> */}
        </div>
    );
};

export default Messages;