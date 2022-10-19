// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqQf28T5ikytOxYAEPRemOB_3p_vsy8YU",
  authDomain: "todolist-2773b.firebaseapp.com",
  projectId: "todolist-2773b",
  storageBucket: "todolist-2773b.appspot.com",
  messagingSenderId: "31600699364",
  appId: "1:31600699364:web:c20c49af64350903a809f1",
  measurementId: "G-03Z91V7MGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
