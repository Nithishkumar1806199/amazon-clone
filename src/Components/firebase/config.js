import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBY2i0hrvMWyEYtmAZ6hZzsD1g8qhp9A08",
    authDomain: "clone-c1bfc.firebaseapp.com",
    databaseURL: "https://clone-c1bfc.firebaseio.com",
    projectId: "clone-c1bfc",
    storageBucket: "clone-c1bfc.appspot.com",
    messagingSenderId: "279966460195",
    appId: "1:279966460195:web:7a21ddc821466e29308496"
  };

const fire = firebase.initializeApp(firebaseConfig)
const auth = fire.auth();

export {auth}
  
 
  