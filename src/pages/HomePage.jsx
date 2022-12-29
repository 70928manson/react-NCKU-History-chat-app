import React from 'react';

import SideBar from '../components/SideBar';
import Chat from '../components/Chat';

import styles from "../styles/pages/home.module.scss";

const HomePage = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <SideBar />
                <Chat />
            </div>
        </div>
    );
};

export default HomePage;