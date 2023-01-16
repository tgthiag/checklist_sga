import firebase from "firebase/compat/app"
const db = firebase.initializeApp({
    apiKey: "AIzaSyAOkMUePPHdiBB5i6Uw7r17Ol5_s01FALw",
    authDomain: "sga-qcp.firebaseapp.com",
    databaseURL: "https://sga-qcp-default-rtdb.firebaseio.com",
    projectId: "sga-qcp",
    storageBucket: "sga-qcp.appspot.com",
    messagingSenderId: "114698847046",
    appId: "1:114698847046:web:9d67336b5a63aa35b2db47"
  });

  export default db
// import "firebase/database";
// const config = {
//   apiKey: "AIzaSyAOkMUePPHdiBB5i6Uw7r17Ol5_s01FALw",
//   authDomain: "sga-qcp.firebaseapp.com",
//   databaseURL: "https://sga-qcp-default-rtdb.firebaseio.com",
//   projectId: "sga-qcp",
//   storageBucket: "sga-qcp.appspot.com",
//   messagingSenderId: "114698847046",
//   appId: "1:114698847046:web:9d67336b5a63aa35b2db47"
// };
// console.log(firebase)
// export const db = firebase.initializeApp(config)



// Import the functions you need from the SDKs you need
// import "firebase/database";
// import firebase from "firebase/app";
// import initializeApp from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOkMUePPHdiBB5i6Uw7r17Ol5_s01FALw",
//   authDomain: "sga-qcp.firebaseapp.com",
//   databaseURL: "https://sga-qcp-default-rtdb.firebaseio.com",
//   projectId: "sga-qcp",
//   storageBucket: "sga-qcp.appspot.com",
//   messagingSenderId: "114698847046",
//   appId: "1:114698847046:web:9d67336b5a63aa35b2db47"
// };

// // Initialize Firebase


// const database = initializeApp(firebaseConfig)

// export const db = database

// // export const db = getDatabase(database);