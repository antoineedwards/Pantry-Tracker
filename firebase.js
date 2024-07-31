// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/Firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4yHqX6-42J7AKOf1xuC0_KFFpTfDFiVs",
  authDomain: "inventory-management-2c464.firebaseapp.com",
  projectId: "inventory-management-2c464",
  storageBucket: "inventory-management-2c464.appspot.com",
  messagingSenderId: "436658572290",
  appId: "1:436658572290:web:2d84d74e777c1b756ceb1b",
  measurementId: "G-SYGDL2NS1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}