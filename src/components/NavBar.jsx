import React, { useContext } from 'react';

import styles from "../styles/components/navbar.module.scss";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>NCKU chat</span>
            <div className={styles.user}>
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    );
};

export default NavBar;