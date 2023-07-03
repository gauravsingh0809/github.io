import firebase from "firebase/app";
import database from "firebase/database";
import firestore from "firebase/firestore";
import "firebase/storage";

// Can't read the code from environment variables that can only be done using firebase config 
// Refer this link for details https://stackoverflow.com/a/65267278/8129138

// const config = {
//     apiKey: "AIzaSyBzQwFMzjrvIz9zfQj15W9EQoopIeyHo-4",
//     authDomain: "sfrcms-2.firebaseapp.com",
//     databaseURL: "https://sfrcms-2-default-rtdb.firebaseio.com",
//     projectId: "sfrcms-2",
//     storageBucket: "sfrcms-2.appspot.com",
//     messagingSenderId: "452076823525",
//     appId: "1:452076823525:web:7921a40e5ecedf6dd1c50c"
//   };

const config = {
    apiKey: "AIzaSyAH0GYYNyGWasXGYo1oABu24gqQG7wW55M",
    authDomain: "digital-sfr.firebaseapp.com",
    databaseURL: " https://digital-sfr-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "digital-sfr",
    storageBucket: "digital-sfr.appspot.com",
    messagingSenderId: "948466445334",
    appId: "1:948466445334:web:530e1278efa95325341937"
  };

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

// export const storage = firebase.storage();
