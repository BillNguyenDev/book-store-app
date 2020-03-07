import firebase from 'firebase/app';// config firebase
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFD1M2ly5dYSvDYvgkrAV5bf6Hi79xrOM",
    authDomain: "book-store-app-billnguyen.firebaseapp.com",
    databaseURL: "https://book-store-app-billnguyen.firebaseio.com",
    projectId: "book-store-app-billnguyen",
    storageBucket: "book-store-app-billnguyen.appspot.com",
    messagingSenderId: "405655787192",
    appId: "1:405655787192:web:414c04321de0e0623fc64d",
    measurementId: "G-HMSTQ8F0P0"
  };
firebase.initializeApp(firebaseConfig);


export default firebase;