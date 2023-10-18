// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61aQxM-R8Lruoy4q8lnygLfDMD9FXjj0",
  authDomain: "brandshop-client-side.firebaseapp.com",
  projectId: "brandshop-client-side",
  storageBucket: "brandshop-client-side.appspot.com",
  messagingSenderId: "859550420739",
  appId: "1:859550420739:web:f29db7d09fab1961576336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;