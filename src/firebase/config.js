import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfIQriDjczPAUEhUCIo0pa_ESjC9ve6es",
    authDomain: "sample-de4dc.firebaseapp.com",
    projectId: "sample-de4dc",
    storageBucket: "sample-de4dc.appspot.com",
    messagingSenderId: "1029713246092",
    appId: "1:1029713246092:web:ddcf199dc4a0cd146088a9",
    measurementId: "G-REQJB9PE4G"
  };

export default firebase.initializeApp(firebaseConfig)