import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBozoUvs-aWQ1IL3jj84mjeQuvpbMyE9ME",
  authDomain: "chatthing-29689.firebaseapp.com",
  projectId: "chatthing-29689",
  storageBucket: "chatthing-29689.appspot.com",
  messagingSenderId: "867317692166",
  appId: "1:867317692166:web:e9359220a4ad4353969087",
  measurementId: "G-YMWE7QPBNZ"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey there</h1>
      </header>
    </div>
  );
}

export default App;
