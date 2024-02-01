
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNz7b0bOpc3Bmo2NNzlX0fhqVtyhQF3jM",
  authDomain: "tokumail-c8a51.firebaseapp.com",
  projectId: "tokumail-c8a51",
  storageBucket: "tokumail-c8a51.appspot.com",
  messagingSenderId: "9627600331",
  appId: "1:9627600331:web:27dfbe6da62ec3804fe24e",
  measurementId: "G-1X4LJ0HQQ1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);