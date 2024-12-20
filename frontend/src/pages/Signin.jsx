import React from 'react';
import '../css/signin.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Signin() {
  return (
    <>
    <Header />
    <div className="signin-container">
      <div className="signin-card">
        <h2>Hi, Welcome Back</h2>
        <p>Enter your credentials to continue</p>
        <form className="signin-form">
          <div className="signin-form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="signin-form-group">
            <div className="signin-password-input">
              <input type="password" id="password" placeholder="Password" required />
              {/* <button type="button" className="toggle-password">👁️</button> */}
            </div>
          </div>
          <div className="signin-form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="signin-forgot-password">Forgot Password</a>
          </div>
          <button type="submit" className="signin-signin-button">Login</button>
        </form>
        <div className="signin-signup-section">
          <p>Don't have an account? <a href="/signup" className="signin-signup-link">Sign up</a></p>
        </div>
        <div className="signin-social-login">
          <p>Or login with</p>
          <div className="signin-social-buttons">
            <button className="signin-facebook-button">Facebook</button>
            <button className="signin-google-button">Google</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Signin;
