import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBDN_-JQmFBrdQslu53It3xm4YU2d4DrnY",
  authDomain: "noteapp-c4874.firebaseapp.com",
  databaseURL: "https://noteapp-c4874-default-rtdb.firebaseio.com",
  projectId: "noteapp-c4874",
  storageBucket: "noteapp-c4874.appspot.com",
  messagingSenderId: "386163836880",
  appId: "1:386163836880:web:f2d8bef9a1f166dd425bd5",
  measurementId: "G-F3KRY5765V",
};

var app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

export const noteData = app.database().ref().child("notes");

// Initialize Firebase
//export const firebaseConnect = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// var data = firebase.database().ref("dataForNote/note2");
//<--Lay du lieu -->
//Once: Khi lấy đc data
// data.once("value").then((snapshot) => console.log(snapshot.val()));
//<--Sua du lieu -->
// data.set({
//   id: 1,
//   title: "Title 1",
//   content: "Lorem ispum amet.",
// });
