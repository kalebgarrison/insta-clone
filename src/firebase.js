import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhYhy_KWQpN7PPe39mvnZXn8z-6URgZQY",
  authDomain: "insta-clone-1664a.firebaseapp.com",
  databaseURL: "https://insta-clone-1664a.firebaseio.com",
  projectId: "insta-clone-1664a",
  storageBucket: "insta-clone-1664a.appspot.com",
  messagingSenderId: "674463483146",
  appId: "1:674463483146:web:6bd606b9b556eaf6bd66f3",
  measurementId: "G-CZCW8K5R68",
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };

