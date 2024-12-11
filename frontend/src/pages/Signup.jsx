import React, { useState } from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import '../css/signup.css';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Proceed with form submission logic
    }
    // Add form validation and submission logic here
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-title">Sign up</h2>
          <p className="signup-subtitle">Enter your credentials to continue</p>
          
          <div className="signup-form-row">
            <div className="signup-form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signup-form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="signup-form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="signup-error">{errors.password}</span>}
          </div>
          <div className="signup-form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <span className="signup-error">{errors.confirmPassword}</span>
            )}
          </div>
          <div className="signup-form-group terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">I agree to all the Terms and Privacy Policies</label>
          </div>
          
          <button type="submit" className="signup-btn-create-account">
            Sign UP
          </button>
          
          <p className="signup-signin-link">
            Already have an account? <a href="/signin">Sign In</a>
          </p>

          <div className="signup-divider">
                        <Divider>
                            <Typography variant="caption">
                                Sign in with
                            </Typography>
                        </Divider>
          </div>
          
          <button type="button" className="signup-btn-google-login">
            Google Account
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
