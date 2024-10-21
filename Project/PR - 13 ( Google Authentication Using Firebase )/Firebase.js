import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI7xYaUilJSBLaUqwwTCWcgEM_q1-jehY",
  authDomain: "crud-realtime-acc08.firebaseapp.com",
  databaseURL: "https://crud-realtime-acc08-default-rtdb.firebaseio.com",
  projectId: "crud-realtime-acc08",
  storageBucket: "crud-realtime-acc08.appspot.com",
  messagingSenderId: "565450645086",
  appId: "1:565450645086:web:1bfee14e63c3532a51decf",
  measurementId: "G-C2EBS0QSP8"
};

const app = initializeApp(firebaseConfig);

export const  auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;