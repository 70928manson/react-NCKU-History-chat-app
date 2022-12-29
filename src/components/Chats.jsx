import React from 'react';

import styles from "../styles/components/chats.module.scss"

const Chats = () => {
    return (
        <div className={styles.chats}>
            <div className={styles.userChat}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={styles.userChat}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={styles.userChat}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;