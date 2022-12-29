import React from 'react';

import styles from "../styles/pages/form.module.scss";
import Add from "../images/addAvatar.png";

const LoginPage = () => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <span className={styles.logo}>NCKU Chat</span>
                <span className={styles.title}>Register</span>
                <form>
                    <input type="text" placeholder="display name"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <input style={{ display: 'none' }} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default LoginPage;