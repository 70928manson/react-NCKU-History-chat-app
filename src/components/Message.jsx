import React from 'react';

import styles from "../styles/components/message.module.scss";

const Message = () => {
    return (
        <div className={`${styles.message} ${styles.owner}`}>
            <div className={styles.messageInfo}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>just now</span>
            </div>
            <div className={styles.messageContent}>
                <p>hello</p>
                {/* <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
            </div>
        </div>
    );
};

export default Message;