import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import styles from "../styles/components/input.module.scss";

import Img from "../images/img.png";
import Attach from "../images/attach.png";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc, } from 'firebase/firestore';
import { v4 as uuid } from "uuid";
import { db, storage } from '../utils/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    //訊息 -> firebase 
    const handleSend = async () => {
        if (img) {
            //same as register
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                  //TODO:Handle Error
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                      messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: currentUser.uid,
                        date: Timestamp.now(),
                        img: downloadURL,
                      }),
                    });
                  });
                }
            );
        }else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                })
            });
        };

        //自己
        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        })
        //別人
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        })
        setText("");
        setImg(null);
    }
    
    const handleKey = e => {
        e.code === "Enter" && handleSend();
    }

    return (
        <div className={styles.input}>
            <input 
                type="text" 
                placeholder="Type something..." 
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKey}  
                value={text} 
            />
            <div className={styles.send}>
                <img src={Attach} alt="" />
                <input 
                    type="file" 
                    style={{ display: 'none' }} 
                    id="file" 
                    onChange={e => setImg(e.target.files[0])} 
                />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Input;