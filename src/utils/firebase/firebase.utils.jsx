import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCCXPtnu716QP9C37az_sAWMLtsNnsI7-U",
    authDomain: "crwn-clothing-db-2085c.firebaseapp.com",
    projectId: "crwn-clothing-db-2085c",
    storageBucket: "crwn-clothing-db-2085c.appspot.com",
    messagingSenderId: "945541048047",
    appId: "1:945541048047:web:8c400e371e932209691d1a"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);