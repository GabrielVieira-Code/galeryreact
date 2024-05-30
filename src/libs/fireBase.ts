import { initializeApp } from "firebase/app";
import { getStorage  ,ref, listAll  } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCr2YdYXUoibGw_ilAjX-XbyaBmFgMhIc0",
  authDomain: "dataprojectreact.firebaseapp.com",
  projectId: "dataprojectreact",
  storageBucket: "dataprojectreact.appspot.com",
  messagingSenderId: "500150346087",
  appId: "1:500150346087:web:25179fb6c149e4849a8fc2",
  measurementId: "G-CWYLJYH7W4"
  };
  const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);