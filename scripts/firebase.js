// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ3d0oxjqe6WAHVJW71Y6mN8sP9_0yDA4",
  authDomain: "ninja-authentication-d5124.firebaseapp.com",
  projectId: "ninja-authentication-d5124",
  storageBucket: "ninja-authentication-d5124.appspot.com",
  messagingSenderId: "648406131531",
  appId: "1:648406131531:web:99a96448da41f11cd3bece",
  measurementId: "G-K11D74P89Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
// update firestore settings
// db.settings({ timestampsInSnapshots: true });
