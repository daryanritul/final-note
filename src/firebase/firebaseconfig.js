// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7M0fiVsr8CTOrz6AXqIrMcQ_CW8XB0a0',
  authDomain: 'finalnote-app.firebaseapp.com',
  projectId: 'finalnote-app',
  storageBucket: 'finalnote-app.appspot.com',
  messagingSenderId: '1037201229448',
  appId: '1:1037201229448:web:48bc78f8e72592ca51013d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
