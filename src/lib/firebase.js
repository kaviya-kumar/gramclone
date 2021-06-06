import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';



const config ={
    apiKey: "AIzaSyC7d24gyjhJyF8712jJS1j5OdasLQo4XdE",
    authDomain: "instaclone-dbc2a.firebaseapp.com",
    projectId: "instaclone-dbc2a",
    storageBucket: "instaclone-dbc2a.appspot.com",
    messagingSenderId: "385934104450",
    appId: "1:385934104450:web:4a594d63f53fc55340a19b"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
export { firebase, FieldValue };