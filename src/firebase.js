import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-HhB_Q2vKCRat-ZK6kmJhQjV3EWkN1kI',
  authDomain: 'digitalspace-dde24.firebaseapp.com',
  projectId: 'digitalspace-dde24',
  storageBucket: 'digitalspace-dde24.appspot.com',
  messagingSenderId: '549152777659',
  appId: '1:549152777659:web:8bf2a505c2f8bb43b9109e',
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
