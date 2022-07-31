import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPjt-wF_-wDxaVYCFV0AF42M1-iyZNRb8",
  authDomain: "whatsapp-clone-513e4.firebaseapp.com",
  projectId: "whatsapp-clone-513e4",
  storageBucket: "whatsapp-clone-513e4.appspot.com",
  messagingSenderId: "332785640490",
  appId: "1:332785640490:web:cc92bbf471155a0975cf53"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db ;