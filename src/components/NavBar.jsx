import React from 'react';

import styles from "../styles/components/navbar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>NCKU chat</span>
            <div className={styles.user}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>Jhon</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default NavBar;