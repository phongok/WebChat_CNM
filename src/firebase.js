import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuwfmmjvnE-R4NdfCdQsPfUC4O_klW6JM",
  authDomain: "unitchat-4f0a6.firebaseapp.com",
  projectId: "unitchat-4f0a6",
  storageBucket: "unitchat-4f0a6.appspot.com",
  messagingSenderId: "929384700116",
  appId: "1:929384700116:web:4a8be889271c1631ef4341"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
