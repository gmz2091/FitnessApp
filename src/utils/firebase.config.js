import firebase from "firebase/app";
import "firebase/analytics";

const FirebaseApp = () => {
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.measurementId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export default FirebaseApp;
