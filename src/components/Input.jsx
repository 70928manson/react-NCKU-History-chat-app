import React from 'react';

import styles from "../styles/components/input.module.scss";

import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
    return (
        <div className={styles.input}>
            <input type="text" placeholder="Type something..." />
            <div className={styles.send}>
                <img src={Attach} alt="" />
                <input type="file" style={{ display: 'none' }} id="file" />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Input;