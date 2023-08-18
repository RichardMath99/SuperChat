import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './firebase/config';

function App() {
  const [user] = useAuthState(firebase.auth());

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
