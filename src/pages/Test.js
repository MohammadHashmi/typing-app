import firebase from 'firebase/compat/app';
import { useState } from 'react';

firebase.initializeApp({
    apiKey: "AIzaSyBozoUvs-aWQ1IL3jj84mjeQuvpbMyE9ME",
    authDomain: "chatthing-29689.firebaseapp.com",
    projectId: "chatthing-29689",
    storageBucket: "chatthing-29689.appspot.com",
    messagingSenderId: "867317692166",
    appId: "1:867317692166:web:e9359220a4ad4353969087",
    measurementId: "G-YMWE7QPBNZ"
  })
  
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let charIndex = 0


export default function Test() {
    const [userInput, setUserInput] = useState("");

    const handlesKeyEvent = (event) => {
        setUserInput(event.target.value);
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === paragraph[charIndex]) {
            console.log("CorrectQ!!")
            charIndex += 1
        }
    })


    return(
        <div>
            <input 
                type="text" 
                value={userInput} 
                onChange={handlesKeyEvent} 
                placeholder="Type something..." 
            />
            <h2> { userInput } </h2>
            <p> { paragraph }</p>
            <button>Try Again</button>
        </div>

    )


}
