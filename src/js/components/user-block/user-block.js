import './style.scss';

const firebase = require('firebase/app');
require('firebase/auth');

const bttnSingIn = document.getElementById('button-sign-in');
const bttnSingOut = document.getElementById('button-sign-out');
const spanUserName = document.querySelector('.user-name');

const provider = new firebase.auth.GoogleAuthProvider();
const config = {
  apiKey: "AIzaSyC8z_9MSKoMCZq_WnSMQu5lgMrLUUcdMjw",
  authDomain: "simple-piskel-clone-app.firebaseapp.com",
  databaseURL: "https://simple-piskel-clone-app.firebaseio.com",
  projectId: "simple-piskel-clone-app",
  storageBucket: "simple-piskel-clone-app.appspot.com",
  messagingSenderId: "67516399185",
  appId: "1:67516399185:web:b8dbea540f66f7a5018270",
};

firebase.initializeApp(config);

export function userSignInOut(event) {
  if (event.target === bttnSingIn) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        spanUserName.textContent = `Hello, ${result.user.displayName}`;
      });
  }
  if (event.target === bttnSingOut) {
    firebase.auth().signOut();
  }
}

firebase.auth().onAuthStateChanged((firebaseUser) => {
  // show and hide buttons
  if (firebaseUser) {
    bttnSingOut.classList.remove('hide');
    bttnSingIn.classList.add('hide');
  } else {
    bttnSingOut.classList.add('hide');
    bttnSingIn.classList.remove('hide');
    spanUserName.textContent = '';
  }
});
