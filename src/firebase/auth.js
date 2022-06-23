import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from './firebaseconfig';

export const authenticationSignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log('Success', response);
    })
    .catch(err => {
      console.log('Failed', err);
    });
};

export const authenticationSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      console.log('Sign In Success', response);
    })
    .catch(err => {
      console.log(err);
    });
};

export const authenticationSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('Sign out Success');
    })
    .catch(() => {
      console.log('Failed', err);
    });
};
