import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZc_ysOJDFr5yyKJpzDZP27ZLTtcfJoxI",
    authDomain: "oldstudentapp.firebaseapp.com",
    databaseURL: "https://oldstudentapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "oldstudentapp",
    storageBucket: "oldstudentapp.appspot.com",
    messagingSenderId: "252968528266",
    appId: "1:252968528266:web:34816b44754ad802c28073",
    measurementId: "G-025HR8W0J7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };