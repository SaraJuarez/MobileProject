import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAUDOJHzaUdZrQ2ykWlsFl4MjWPGyCMPRA",
    authDomain: "phonecatalogue-b7a3e.firebaseapp.com",
    projectId: "phonecatalogue-b7a3e",
    storageBucket: "phonecatalogue-b7a3e.appspot.com",
    messagingSenderId: "1004074135053",
    appId: "1:1004074135053:web:6231864fc9a285921e6f44",
    measurementId: "G-X7V3T1KC1L"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;