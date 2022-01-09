import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyDtIbmBPe7l9jod2A8EKXvipTasjwtZvD4",
    authDomain: "letmeask-aulas-83f06.firebaseapp.com",
    databaseURL: "https://letmeask-aulas-83f06-default-rtdb.firebaseio.com",
    projectId: "letmeask-aulas-83f06",
    storageBucket: "letmeask-aulas-83f06.appspot.com",
    messagingSenderId: "389326031610",
    appId: "1:389326031610:web:f63e345c3abda83daad743"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const database = firebase.database()

  export { firebase, auth, database }
