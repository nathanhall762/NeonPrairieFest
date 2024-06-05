import { initializeApp, getApps } from 'firebase/app';
import type { DocumentData } from 'firebase/firestore';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};
console.log(firebaseConfig);
// Initialize Firebase app if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
console.log(app);
const db = getFirestore(app);
export const getData = async (
  collectionName: string,
  ID?: string
): Promise<DocumentData[]> => {
  let q;

  if (ID) {
    // If a category filter is provided, create a query with a where filter
    q = query(collection(db, collectionName), where('id', '==', ID));
  } else {
    // If no category is provided, fetch all documents from the specified collection
    q = collection(db, collectionName);
  }

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => doc.data());

  return data;
};
