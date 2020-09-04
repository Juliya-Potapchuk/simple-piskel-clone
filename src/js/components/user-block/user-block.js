import './style.scss';

const firebase = require('firebase/app');
require('firebase/auth');

const bttnSingIn = document.getElementById('button-sign-in');
const bttnSingOut = document.getElementById('button-sign-out');
const spanUserName = document.querySelector('.user-name');

const provider = new firebase.auth.GoogleAuthProvider();
const config = {
  apiKey: 'AIzaSyCWQRoCe9dJRS6NTRL2_aCisnHFxqBwaVs',
  authDomain: 'piskel-clone-7c6af.firebaseapp.com',
  databaseURL: 'https://piskel-clone-7c6af.firebaseio.com',
  projectId: 'piskel-clone-7c6af',
  storageBucket: 'piskel-clone-7c6af.appspot.com',
  messagingSenderId: '354420529727',
  appId: '1:354420529727:web:35759ed1321738c65d368a',
  measurementId: 'G-R9C5JVKE9V',
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
