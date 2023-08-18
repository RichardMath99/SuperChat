import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGL9WfFM_UwcZ6DwiwNpIegPeeAmvQAPQ",
    authDomain: "superchat-2ea19.firebaseapp.com",
    projectId: "superchat-2ea19",
    storageBucket: "superchat-2ea19.appspot.com",
    messagingSenderId: "220327317877",
    appId: "1:220327317877:web:7d3cd33222807299ec833c",
    measurementId: "G-HJS29EE4EP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
