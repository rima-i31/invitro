import React, {useState} from "react";
import app from "../FirebaseConfig";
import {getDatabase, ref, set, push } from "firebase/database";

function Write(){
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
const saveData = async ()=>{
    const db = getDatabase(app);
    const newDocRef = push(ref(db), "users");
    set(newDocRef,{
        userName: inputValue1,
        userPassword: inputValue2
    } ).then(() => {
        alert("data saved successfully");
    }).catch((error) =>{
        alert("error:", error.message);
    })
}

    return (
        <div>
           <input type ='text' value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />

            <input type ='text' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}/> <br/>
            <button onClick={saveData}>
                Save Data
            </button>
        </div>
    )
}

export default  Write