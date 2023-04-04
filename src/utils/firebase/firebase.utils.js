import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEkHxjtMy8x2cwSPsonbHGxXfQMIQrtec",
  authDomain: "ecommerce-react-db-56277.firebaseapp.com",
  projectId: "ecommerce-react-db-56277",
  storageBucket: "ecommerce-react-db-56277.appspot.com",
  messagingSenderId: "637976154260",
  appId: "1:637976154260:web:d40270a35ed9db07602481",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
