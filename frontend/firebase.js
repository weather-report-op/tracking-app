// Initialize Firebase app for frontend features like analytics
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWEE1evYM7ekFFJLK6fMlek0A-l-7X28",
  authDomain: "melomerezco-8fdfa.firebaseapp.com",
  projectId: "melomerezco-8fdfa",
  storageBucket: "melomerezco-8fdfa.firebasestorage.app",
  messagingSenderId: "21672363858",
  appId: "1:21672363858:web:c4abf1810c3cf578449c8b",
  measurementId: "G-JP65778861"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (firebase.analytics) {
  firebase.analytics();
}

