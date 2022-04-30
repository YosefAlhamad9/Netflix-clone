import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMYwvW6_PTl9YfGeZTQesvjhA-LhfMj8U",
  authDomain: "netflix-7cc34.firebaseapp.com",
  projectId: "netflix-7cc34",
  storageBucket: "netflix-7cc34.appspot.com",
  messagingSenderId: "1015395675881",
  appId: "1:1015395675881:web:9706c7620fdb7846c90a78",
  measurementId: "G-ZZMERC6RJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
