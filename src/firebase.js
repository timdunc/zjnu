import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "frex-e04c5.firebaseapp.com",
  projectId: "frex-e04c5",
  storageBucket: "frex-e04c5.appspot.com",
  messagingSenderId: "266554379699",
  appId: "1:266554379699:web:dedcdc4a433bc952238fc6",
  // measurementId: "G-2ZGE63ES9F",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
