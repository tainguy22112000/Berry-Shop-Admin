import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnFaduV5KEi0jGzHHxd0D17jtwtnA_v3s",
  authDomain: "one-drink-and-food-369215.firebaseapp.com",
  projectId: "one-drink-and-food-369215",
  storageBucket: "one-drink-and-food-369215.appspot.com",
  messagingSenderId: "913781430893",
  appId: "1:913781430893:web:eea81cdcb2f1eaf3393d64",
  measurementId: "G-5F227V4NY6"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
}