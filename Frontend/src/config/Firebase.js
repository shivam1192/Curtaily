import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDsExYGXz4oZWieAlOtpgCYryi7V-aru8o",
    authDomain: "just-cosmos-250805.firebaseapp.com",
    databaseURL: "https://just-cosmos-250805.firebaseio.com",
    projectId: "just-cosmos-250805",
    storageBucket: "just-cosmos-250805.appspot.com",
    messagingSenderId: "780803606959",
    appId: "1:780803606959:web:f65028e603e3ba7eee075a"
  };


const fire = firebase.initializeApp(firebaseConfig);

export default fire