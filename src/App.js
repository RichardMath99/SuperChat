import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'fireabase/firestore';
import 'firebase/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const dotenv = require('dotenv');
dotenv.config();

const {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId} = process.env;

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        
      </header>
      
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  return <button onClick={useSignInWithGoogle}>Sign in with Google</button>
}

function ChatRoom() {}
export default App;
