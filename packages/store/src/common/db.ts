import { initializeApp } from 'firebase/app';
import {
  collection as firestoreCollection,
  doc as firestoreDoc,
  getFirestore,
} from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
});

export const db = getFirestore(app);

export const collection = (path: string) =>
  firestoreCollection(db, path.split('/')[0], ...path.split('/').slice(1, path.split('/').length));

export const doc = (path: string, id: string) =>
  firestoreDoc(db, path.split('/')[0], ...path.split('/').slice(1, path.split('/').length), id);
