import React from 'react';

import styles from "../styles/components/search.module.scss";

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Find a user" />
            </div>
            <div className={styles.userChat}>
                <img src="https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;