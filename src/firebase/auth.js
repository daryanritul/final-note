import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from './firebaseconfig';

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
