import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "./index.css";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCZrSHkQM1yc2M-PYzIVq6lDNYtfsOdAFo",
  authDomain: "todoapp-h2519.firebaseapp.com",
};
firebase.initializeApp(config);
const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/home",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
};

const LoginPage = () => {
  return (
    <div className="login-page">
      <header>LOGIN PAGE</header>
      <div className="wrapper">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};
export default LoginPage;
