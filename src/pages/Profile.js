import { getAuth, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

firebase.initializeApp({
    apiKey: "AIzaSyBozoUvs-aWQ1IL3jj84mjeQuvpbMyE9ME",
    authDomain: "chatthing-29689.firebaseapp.com",
    projectId: "chatthing-29689",
    storageBucket: "chatthing-29689.appspot.com",
    messagingSenderId: "867317692166",
    appId: "1:867317692166:web:e9359220a4ad4353969087",
    measurementId: "G-YMWE7QPBNZ"
  })

const provider = new GoogleAuthProvider();
const auth = getAuth();
//const result = await signInWithPopup(auth, provider)

export default function Profile() {
    const [user] = useAuthState(auth);

    if (user) {
        return(SignOut());
    } 
    else {
        return(SignIn());
    }


} 

function SignIn() {

    // A function which lets you sign in with a popup when the sign in button is clicked
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    }
  
    return (
        <div className='profile-input'>
            <button onClick={signInWithGoogle} id='sign-in-button'>Sign In With Google</button>
        </div>
    )
  }
  
function SignOut() {
    return auth.currentUser && (
        <div className='profile-input'>
            <button onClick={() => auth.signOut()} id='sign-out-button'>Sign Out</button>
        </div>
    )
  }