import * as firebase from 'firebase';
import Auth from "firebase/auth";
import database from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCRKtPd7TJQFms2BMGziSIf38rxt328w4E",
  authDomain: "serenity-f715d.firebaseapp.com",
  databaseURL: "https://serenity-f715d-default-rtdb.firebaseio.com/",
  projectId: "serenity-f715d",
  storageBucket: "serenity-f715d.appspot.com",
  messagingSenderId: "1023889884770",
  appId: "1:1023889884770:web:8eaaf71a4c11128ec7333b",
  measurementId: "G-57FVQ4ZR89"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, database, Auth };