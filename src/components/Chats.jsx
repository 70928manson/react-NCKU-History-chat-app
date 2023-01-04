import React, { useContext, useEffect, useState } from 'react';

import styles from "../styles/components/chats.module.scss";

import { db } from '../utils/firebase';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

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

    const handleSelect = (userInfo) => {
        dispatch({ type: "CHANGE_USER", payload: userInfo });
    }

    return (
        <div className={styles.chats}>
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map(chat => chat[0] !== "null" && (  //?. 可選鏈, 若chat不存在不會報錯  b[1].date - a[1].date確保最新訊息在最上面   
                <div className={styles.userChat} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <img 
                        src={chat[1].userInfo.photoURL} 
                        alt="" 
                    />
                    <div className={styles.userChatInfo}>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;