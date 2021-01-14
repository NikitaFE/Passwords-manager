import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-jss';
import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

import App from './components/App/App';
import { theme } from './theme';

const firebaseConfig = {  
  apiKey: "AIzaSyBWTUtZSReG_6u8CF5h0LLJZzVNcd3qdiw",
  authDomain: "passwords-manager-57c73.firebaseapp.com",
  databaseURL: "https://passwords-manager-57c73-default-rtdb.firebaseio.com",
  projectId: "passwords-manager-57c73",
  storageBucket: "passwords-manager-57c73.appspot.com",
  messagingSenderId: "302533651858",
  appId: "1:302533651858:web:556fcf84a37a05e6ed654b",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));
