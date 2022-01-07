import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCKR1LleMz7CNX9cfS6onfPGOxNheWhaY8",
    authDomain: "newsletter-app-84099.firebaseapp.com",
    databaseURL: "https://newsletter-app-84099.firebaseio.com",
    projectId: "newsletter-app-84099",
    storageBucket: "newsletter-app-84099.appspot.com",
    messagingSenderId: "655351608349",
    appId: "1:655351608349:web:ca10f1f5ba971fc8cd02f4",
    measurementId: "G-TY0HLN1RMS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();