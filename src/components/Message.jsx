import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import styles from "../styles/components/message.module.scss";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    
    return (
        <div className={`${styles.message} ${ message.senderId === currentUser.uid && styles.owner}`}>
            <div className={styles.messageInfo}>
                <img 
                  src={ 
                    message.senderId === currentUser.uid 
                    ? currentUser.photoURL 
                    : data.user.photoURL 
                  } 
                  alt="" 
                />
                <span>just now</span>
            </div>
            <div className={styles.messageContent}>
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;