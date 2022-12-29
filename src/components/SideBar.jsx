import React from "react";

import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Chats from "../components/Chats";

import styles from "../styles/components/sidebar.module.scss";

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <NavBar />
            <Search />
            <Chats />
        </div>
    );
};

export default SideBar;