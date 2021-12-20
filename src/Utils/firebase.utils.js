// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5lxRonz62MeOO6oCO_YgNctdQLOZQT90",
  authDomain: "fashion-thrift.firebaseapp.com",
  projectId: "fashion-thrift",
  storageBucket: "fashion-thrift.appspot.com",
  messagingSenderId: "586214583518",
  appId: "1:586214583518:web:41d9a950fa2fc35636664f",
  measurementId: "G-H1P8GDE7KX",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// TODO: GET MORE INFO ABOUT EVENT LOGGING FOR GOOGLE ANALYTICS
logEvent(analytics);

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const registrationDate = new Date();
    try {
      setDoc(userRef, {
        displayName,
        email,
        registrationDate,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const loginWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // console.log(`Token: ${token}`);
      // console.log("User:", user);
    })
    .catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...

      console.log(`error`);
    });
