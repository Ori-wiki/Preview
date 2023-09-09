import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDaBSLqJStkuJxRrL1OvMaBJMuTmiVVjeI',
  authDomain: 'db-movie-d0a8c.firebaseapp.com',
  projectId: 'db-movie-d0a8c',
  storageBucket: 'db-movie-d0a8c.appspot.com',
  messagingSenderId: '32278062982',
  appId: '1:32278062982:web:aca1ffa517dd6c4cfbee07',
  measurementId: 'G-4PSKPNG582',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
