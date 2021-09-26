import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB7Nh1UbTEC2VlIB_ZNc4P0ux2kgnbyXIQ",
  authDomain: "voca-38341.firebaseapp.com",
  projectId: "voca-38341",
  storageBucket: "voca-38341.appspot.com",
  messagingSenderId: "1030434495527",
  appId: "1:1030434495527:web:ceadf563e7fa434a6f4202",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
