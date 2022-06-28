import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, database, db } from './firebaseconfig';
export const authenticationSignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const authenticationSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const authenticationSignOut = () => {
  return signOut(auth);
};

export const onAuthStateChange = () => {
  return onAuthStateChanged(auth);
};

export const updateUserData = async data => {
  const docRef = doc(db, 'users', data.uid);
  return await setDoc(docRef, { ...data });
};

export const getUserProfile = async uid => {
  const docRef = doc(db, 'users', uid);
  return await getDoc(docRef);
};
