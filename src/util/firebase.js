import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-zzPiVt-b--4DTjF8Sb9qE-Z1C_9klvI",
  authDomain: "netflix-clone-2dab0.firebaseapp.com",
  projectId: "netflix-clone-2dab0",
  storageBucket: "netflix-clone-2dab0.appspot.com",
  messagingSenderId: "290478225106",
  appId: "1:290478225106:web:e38714d679e5bcaf9b5f0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
