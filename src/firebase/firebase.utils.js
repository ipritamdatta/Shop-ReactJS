import firebase from "firebase/app";

import "firebase/firestore"; //for database
import "firebase/auth"; //for auth

const config = {
  apiKey: "AIzaSyBUwjYzZn2WLVgVYcqVqUCF_xaujHzITBw",
  authDomain: "crwn-db-eb84f.firebaseapp.com",
  databaseURL: "https://crwn-db-eb84f.firebaseio.com",
  projectId: "crwn-db-eb84f",
  storageBucket: "crwn-db-eb84f.appspot.com",
  messagingSenderId: "770347800129",
  appId: "1:770347800129:web:3b85eff0139639844d98c0",
  measurementId: "G-EE5CD48FQ4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
