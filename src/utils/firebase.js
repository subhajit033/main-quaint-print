// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: KEY,
  // authDomain: 'quaintprint-83599.firebaseapp.com',
  // projectId: 'quaintprint-83599',
  // storageBucket: 'quaintprint-83599.appspot.com',
  // messagingSenderId: '633231068668',
  // appId: '1:633231068668:web:5a388ead2ebda1e46bf679',
  authDomain: 'quaintprints-300e5.firebaseapp.com',
  projectId: 'quaintprints-300e5',
  storageBucket: 'quaintprints-300e5.appspot.com',
  messagingSenderId: '898599998464',
  appId: '1:898599998464:web:605780eba9d474423eb4e5',
  measurementId: 'G-Q38X394CDT',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
