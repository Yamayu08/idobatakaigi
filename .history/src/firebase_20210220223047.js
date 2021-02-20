import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUt2moObjZkAkfv9fn3KAgFsFz1p1s55o",
  authDomain: "idobatakaigi-45218.firebaseapp.com",
  projectId: "idobatakaigi-45218",
  storageBucket: "idobatakaigi-45218.appspot.com",
  messagingSenderId: "832845582948",
  appId: "1:832845582948:web:417f05487afb76f6218571"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};

export default pushMessage;