import './App.css';
import firebase from 'firebase/compat/app'; 
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Test from './pages/Test.js'
import Navbar from './navbar';
import Profile from './pages/Profile.js'

firebase.initializeApp({
  apiKey: "AIzaSyBozoUvs-aWQ1IL3jj84mjeQuvpbMyE9ME",
  authDomain: "chatthing-29689.firebaseapp.com",
  projectId: "chatthing-29689",
  storageBucket: "chatthing-29689.appspot.com",
  messagingSenderId: "867317692166",
  appId: "1:867317692166:web:e9359220a4ad4353969087",
  measurementId: "G-YMWE7QPBNZ"
})


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </>
    
  );
}


export default App;
