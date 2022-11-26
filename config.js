import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDZBaXqbhrNlz24NEjzHFs-qylFIdNfcvk",
  authDomain: "projeto-71-4a8d7.firebaseapp.com",
  projectId: "projeto-71-4a8d7",
  storageBucket: "projeto-71-4a8d7.appspot.com",
  messagingSenderId: "350233170464",
  appId: "1:350233170464:web:a6cc59b0826895119a2245"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
