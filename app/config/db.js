import * as Firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3xe3RzuXYQwXhyNs7ugy9ccE024CI-qY",
  authDomain: "spotify-bpm-c1846.firebaseapp.com",
  databaseURL: "https://spotify-bpm-c1846.firebaseio.com",
  projectId: "spotify-bpm-c1846",
  storageBucket: "spotify-bpm-c1846.appspot.com",
  messagingSenderId: "576733829516",
};
const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
