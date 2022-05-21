import React, { useRef } from "react";
import { auth } from "../../util/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpscreen.css";

const SignUpscreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <div className="signup__top">
        <img
          className="signup__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix"
        />
      </div>
      <div className="signup__body">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="loginButton" onClick={signIn}>
            Sign In
          </button>
          <span>
            New to Netflix? <b onClick={register}>Sign Up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUpscreen;
