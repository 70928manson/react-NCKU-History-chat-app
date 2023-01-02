import React, { useState } from 'react';

import styles from "../styles/pages/form.module.scss";

import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/react-NCKU-History-chat-app")
      } catch (err) {
        console.log('err', err);
        setErr(true);
      }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <span className={styles.logo}>NCKU Chat</span>
                <span className={styles.title}>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/react-NCKU-History-chat-app/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;