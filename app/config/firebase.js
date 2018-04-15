import firebase from 'firebase'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNOXCCYb7VulBQx3sNFZ-ORaYEsvRRGP4",
    authDomain: "brown-ep-startup-ideas-app.firebaseapp.com",
    databaseURL: "https://brown-ep-startup-ideas-app.firebaseio.com",
    projectId: "brown-ep-startup-ideas-app",
    storageBucket: "brown-ep-startup-ideas-app.appspot.com",
    messagingSenderId: "165580362455"
  };
  
  export default firebase.initializeApp(config)

  export const db = firebase.firestore()