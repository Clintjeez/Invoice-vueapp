import { def } from "@vue/shared";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8XCVPcWBaZGzWxWgTM5U3ZPRGpBIvAxE",
  authDomain: "invoice-app-4a03f.firebaseapp.com",
  projectId: "invoice-app-4a03f",
  storageBucket: "invoice-app-4a03f.appspot.com",
  messagingSenderId: "547442365529",
  appId: "1:547442365529:web:8032d183db5cd84e4e0d48",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
