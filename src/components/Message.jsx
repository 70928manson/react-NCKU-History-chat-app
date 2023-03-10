import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import styles from "../styles/components/message.module.scss";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    //傳送最新訊息時滑到最底下
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, [message]);
    
    return (
        <div 
          className={`${styles.message} ${ message.senderId === currentUser.uid && styles.owner}`}
          ref={ref}>
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
                {message.text !== "" && <p>{message.text}</p>}
                {/* <p>{message.text !== "" ? message.text : '1'}</p> */}
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;