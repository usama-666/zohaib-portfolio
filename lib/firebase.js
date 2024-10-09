// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNq4B5Q5laIhTOudhwoxrah4saQFac-rM",
    authDomain: "zohaib-portfolio-1cb08.firebaseapp.com",
    projectId: "zohaib-portfolio-1cb08",
    storageBucket: "zohaib-portfolio-1cb08.appspot.com",
    messagingSenderId: "341663610220",
    appId: "1:341663610220:web:a845ad0b558c334ffaaf49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };

export default app;
