import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAakg1_ckdE1uuuAFhbwZu2etcP94-xL0",
  authDomain: "hot-burger-22341.firebaseapp.com",
  databaseURL: "https://hot-burger-22341-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

