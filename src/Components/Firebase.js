import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'


const FirebaseConfig = {
  apiKey: "AIzaSyDuprDSa4fmACLo8434KMFO7COAvWrlNw0",
  authDomain: "saarthi2-cbe46.firebaseapp.com",
  projectId: "saarthi2-cbe46",
  storageBucket: "saarthi2-cbe46.appspot.com",
  messagingSenderId: "14284970059",
  appId: "1:14284970059:web:824dd2b9685ce4df5a95ce",
  measurementId: "G-1JNR2E91EC"
};

firebase.initializeApp(FirebaseConfig);
const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default firebase;