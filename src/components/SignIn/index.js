import React from 'react';
import { auth } from '../../firebase/config';


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  );
}

export default SignIn;
