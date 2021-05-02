import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDxlI36uYgGh0G27rL8PkRjwCfFBNEq4aM",
  authDomain: "sneaker-bazaar.firebaseapp.com",
  projectId: "sneaker-bazaar",
  storageBucket: "sneaker-bazaar.appspot.com",
  messagingSenderId: "103932562480",
  appId: "1:103932562480:web:ba65b4b8c1dff938a6f1f5",
  measurementId: "G-G1LSVPNC55"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;