import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

const config = {
};
firebase.initializeApp(config);
// firebase.functions().useFunctionsEmulator('http://localhost:5001');

export default firebase;
