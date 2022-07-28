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

export const saveNotebook = async (uid, data) => {
  const docRef = doc(db, 'users', uid, 'notebooks', data.uid);
  return await setDoc(docRef, {
    ...data,
  });
};
