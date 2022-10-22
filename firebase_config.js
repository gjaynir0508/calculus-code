// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDoGdY0XkjbemTFY_XLmYRg5k61hbs0X10",
	authDomain: "calculus-code.firebaseapp.com",
	projectId: "calculus-code",
	storageBucket: "calculus-code.appspot.com",
	messagingSenderId: "1008315200266",
	appId: "1:1008315200266:web:bf13a9c6d4ae522b0c80f3",
	measurementId: "G-CX81KVBQSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
