import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  collectionGroup,
  updateDoc,
} from 'firebase/firestore';
import { auth, database, db } from './firebaseconfig';

export const saveNotebook = async (uid, data) => {
  const docRef = doc(db, 'users', uid, 'notebooks', data.uid);
  console.log(uid, data.uid);
  return await setDoc(docRef, {
    ...data,
  });
};

export const fetchNotebooks = async uid => {
  const q = collection(db, 'users', uid, 'notebooks');
  return await getDocs(q);
};
