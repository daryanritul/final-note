import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { auth, database, db } from './firebaseconfig';

export const search = async input => {
  var operation = 'name';
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    operation = 'email';
  }
  const docRef = collection(db, 'users');
  const q = query(docRef, where(operation, '==', input));
  return await getDocs(q);
};
