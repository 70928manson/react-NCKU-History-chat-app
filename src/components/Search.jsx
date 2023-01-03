import React, { useContext, useState } from 'react';
import styles from "../styles/components/search.module.scss";
import { db } from '../utils/firebase';
import { collection, query, where, getDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [searchName, setSearchName] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext);

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

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
          currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;
        try {
          const res = await getDoc(doc(db, "chats", combinedId));
    
          if (!res.exists()) {
            //create a chat in chats collection
            await setDoc(doc(db, "chats", combinedId), { messages: [] });
    
            //create user chats, nested object, 該名使用者跟其他使用者的聊天室
            await updateDoc(doc(db, "userChats", currentUser.uid), {
              [combinedId + ".userInfo"]: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });
    
            await updateDoc(doc(db, "userChats", user.uid), {
              [combinedId + ".userInfo"]: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });
          }
        } catch (err) {}

        setUser(null);
        setSearchName("")
      };

    return (
        <div className={styles.search}>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Find a user" 
                    onKeyDown={handleKey} 
                    onChange={e => setSearchName(e.target.value)}
                    value={searchName} />
            </div>
            {err && <span>User not found!</span>}
            {user && <div className={styles.userChat} onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className={styles.userChatInfo}>
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
};

export default Search;