import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import logo from './Assets/logo.png';  

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'

import { HomePage } from './App';

const firebaseConfig = {
    apiKey: "AIzaSyBozoUvs-aWQ1IL3jj84mjeQuvpbMyE9ME",
    authDomain: "chatthing-29689.firebaseapp.com",
    projectId: "chatthing-29689",
    storageBucket: "chatthing-29689.appspot.com",
    messagingSenderId: "867317692166",
    appId: "1:867317692166:web:e9359220a4ad4353969087",
    measurementId: "G-YMWE7QPBNZ"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = firebase.auth();

export default function Navbar() {
    const [user] = useAuthState(auth);

    return(
        <header className="App-header">
        <nav>
          <img src={logo} alt="logo for brand" className="logo"></img>
          <ul>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/test">Test</a></li>
            <li className="nav-item">{user ? <HomePage /> : <SignIn />}</li>
          </ul>
        </nav>

      </header>
    )
}

export function SignIn() {

  // A function which lets you sign in with a popup when the sign in button is clicked
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

export function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}