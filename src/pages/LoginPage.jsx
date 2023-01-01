import React, { useState } from 'react';

import styles from "../styles/pages/form.module.scss";
import Add from "../images/addAvatar.png";

const LoginPage = () => {
    const [err, setErr] = useState(false);
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <span className={styles.logo}>NCKU Chat</span>
                <span className={styles.title}>Login</span>
                <form>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    );
};

export default LoginPage;