import React, { useContext, useEffect, useState } from 'react';

import styles from "../styles/components/chats.module.scss";

import { db } from '../utils/firebase';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';

const Chats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);

    //聊天室實時更新
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
    
            return () => {
                unsub();
            };
        }
        currentUser.uid && getChats();
    }, [currentUser.uid]);

    console.log('chats.jsx: ', Object.entries(chats));

    return (
        <div className={styles.chats}>
            {Object.entries(chats)?.map(chat => (
                <div className={styles.userChat} key={chat[0]}>
                    <img 
                        src={chat[1].userInfo.photoURL} 
                        alt="" 
                    />
                    <div className={styles.userChatInfo}>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;