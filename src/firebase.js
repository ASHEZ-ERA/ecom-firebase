import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTAWucnmkpP1qdYK0SwcDhN4NYdMqapZY",
  authDomain: "ecommerce-76912.firebaseapp.com",
  projectId: "ecommerce-76912",
  storageBucket: "ecommerce-76912.firebasestorage.app",
  messagingSenderId: "1085773373144",
  appId: "1:1085773373144:web:b9cc3379fd686f4d4fc1ad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);