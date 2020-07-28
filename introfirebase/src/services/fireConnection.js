import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyCtIHGAqbD_hFdL99ya7Lygiq0_7XWq5FM",
  authDomain: "reactapp-1c781.firebaseapp.com",
  databaseURL: "https://reactapp-1c781.firebaseio.com",
  projectId: "reactapp-1c781",
  storageBucket: "reactapp-1c781.appspot.com",
  messagingSenderId: "828203496682",
  appId: "1:828203496682:web:f5aa77cdc5b48a946e5393",
  measurementId: "G-0D4JGJBRDL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;