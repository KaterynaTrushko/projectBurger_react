import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAakg1_ckdE1uuuAFhbwZu2etcP94-xL0",
  authDomain: "hot-burger-22341.firebaseapp.com",
  databaseURL: "https://hot-burger-22341-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDAakg1_ckdE1uuuAFhbwZu2etcP94-xL0",
//   authDomain: "hot-burger-22341.firebaseapp.com",
//   databaseURL: "https://hot-burger-22341-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "hot-burger-22341",
//   storageBucket: "hot-burger-22341.appspot.com",
//   messagingSenderId: "919144411872",
//   appId: "1:919144411872:web:a3e266a79571662e485685"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);