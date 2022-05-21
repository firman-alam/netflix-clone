import React, { useState } from "react";
import SignUpscreen from "../SignUp/SignUpscreen";
import "./Loginscreen.css";

const Loginscreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt="background"
        />
        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="login__body">
        {signIn ? (
          <SignUpscreen />
        ) : (
          <>
            <h1>Unlimited Movies, TV Series, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className="login__input">
              <form className="login__form">
                <input type="email" placeholder="Email Address" />
                <button type="submit" onClick={() => setSignIn(true)}>
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Loginscreen;
