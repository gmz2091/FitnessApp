import firebase from "firebase/app";
import "firebase/analytics";

const FirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB5hxuPMzEGlMxWbmKBM5fFb1n0ejnryi4",
    authDomain: "fitnessapp-6e0bd.firebaseapp.com",
    databaseURL: "https://fitnessapp-6e0bd-default-rtdb.firebaseio.com",
    projectId: "fitnessapp-6e0bd",
    storageBucket: "fitnessapp-6e0bd.appspot.com",
    messagingSenderId: "117374338255",
    appId: "1:117374338255:web:1e351c701d6b20d76ba3ba",
    measurementId: "G-06L9PGCD1E",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export default FirebaseApp;
