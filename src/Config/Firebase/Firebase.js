import firebase from 'firebase'
import 'firebase/firebase-firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA1wsMLSjFdee931EsTDo6c9qPUHVd5SWc",
    authDomain: "team-practice.firebaseapp.com",
    databaseURL: "https://team-practice.firebaseio.com",
    projectId: "team-practice",
    storageBucket: "team-practice.appspot.com",
    messagingSenderId: "880549898948",
    appId: "1:880549898948:web:d1d5dbc18680ab3bccb791",
    measurementId: "G-8EMBZYQTP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase