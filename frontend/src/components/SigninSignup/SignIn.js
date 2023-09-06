import React, { useState } from 'react';
import './SignIn.css';
import Logo from '../Assets/Logo.png';
import OR from '../Assets/Group 1.png';
import Link from '../Assets/logos_facebook.svg';
import Llnk from '../Assets/skill-icons_linkedin.svg';
import google from '../Assets/icons_google.svg';

function SignIn() {
  const [isSignInMode, setIsSignInMode] = useState(true);

  const actionText = isSignInMode ? 'Sign In' : 'Sign Up';
  const welcomeText = isSignInMode ? 'Welcome Back!' : 'Join SpaceTech';
  const continueText = isSignInMode ? 'Sign in to continue' : 'Register to continue';

  return (
    <div className="App">
      <div className="welcome-container">
        <h2>{welcomeText}</h2>
        <p>{continueText}</p>
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="signin-form">
        {!isSignInMode && <input type="text" placeholder="Username" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="Sign-in">{actionText}</button>
        <div className="OR">
          <img src={OR} alt="Logo" />
        </div>
        <div className="social-icons">
        <a href="https://www.google.com">
          <img src={google} alt="google" /> </a>

          <a href="https://www.linkedin.com">
          <img src={Llnk} alt="linkedin" /></a>

        <a href="https://www.facebook.com">
          <img src={Link} alt="facebook" /></a>

        </div>
        <p className="signup-link">
          {isSignInMode
            ? "Don't have an account? "
            : 'Already have an account? '}
          <a href="#" onClick={() => setIsSignInMode(!isSignInMode)}>
            {actionText}
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;

