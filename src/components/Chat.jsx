import React from 'react';

import styles from "../styles/components/chat.module.scss";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";

import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.chatInfo}>
                <span>Jane</span>
                <div className={styles.chatIcons}>
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;