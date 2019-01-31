import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import * as serviceWorker from './serviceWorker';

const config = {
    apiKey: "AIzaSyDCeDsz6vE_rAfN-14QLiyvGx4p7MocYVw",
    authDomain: "redshift-fps.firebaseapp.com",
    databaseURL: "https://redshift-fps.firebaseio.com",
    projectId: "redshift-fps",
    storageBucket: "redshift-fps.appspot.com",
    messagingSenderId: "228074821025"
  };
  
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
