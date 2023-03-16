import firebase from "firebase/compat/app";
const db = firebase.initializeApp({
  apiKey: "AIzaSyAOkMUePPHdiBB5i6Uw7r17Ol5_s01FALw",
  authDomain: "sga-qcp.firebaseapp.com",
  databaseURL: "https://sga-qcp-default-rtdb.firebaseio.com",
  projectId: "sga-qcp",
  storageBucket: "sga-qcp.appspot.com",
  messagingSenderId: "114698847046",
  appId: "1:114698847046:web:9d67336b5a63aa35b2db47",
});

export default db;
