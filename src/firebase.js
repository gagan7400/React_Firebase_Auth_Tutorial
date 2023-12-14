import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8de8jXa-mt8gxQbO52J2lFRoscw78Okg",
  authDomain: "authenticationproject-331b8.firebaseapp.com",
  projectId: "authenticationproject-331b8",
  storageBucket: "authenticationproject-331b8.appspot.com",
  messagingSenderId: "1066254024701",
  appId: "1:1066254024701:web:105d827a9ccbbca07f2394",
  measurementId: "G-0XFBQF87C3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




