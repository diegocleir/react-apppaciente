// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8MD4dTGJZn6AXdS7hlhBoL7s-i-1jFKs",
  authDomain: "crud-react-54861.firebaseapp.com",
  projectId: "crud-react-54861",
  storageBucket: "crud-react-54861.appspot.com",
  messagingSenderId: "781621632105",
  appId: "1:781621632105:web:f00639bae346601ef556f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default child(ref(database), 'pacientes')