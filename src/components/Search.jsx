import React, { useState } from 'react';
import styles from "../styles/components/search.module.scss";
import { db } from '../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Search = () => {
    const [searchName, setSearchName] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        const q = query(
          collection(db, "users"),
          where("displayName", "==", searchName)
        );
    
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        } catch (err) {
          setErr(true);
        }
    };

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }

    return (
        <div className={styles.search}>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={e => setSearchName(e.target.value)} />
            </div>
            {err && <span>User not found!</span>}
            {user && <div className={styles.userChat}>
                <img src={user.photoURL} alt="" />
                <div className={styles.userChatInfo}>
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
};

export default Search;