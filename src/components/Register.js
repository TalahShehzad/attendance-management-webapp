import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form className="register-form">
        <div className="register-input-group">
          <label className="register-label" htmlFor="username">
            Username:
          </label>
          <input
            className="register-input"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="register-input-group">
          <label className="register-label" htmlFor="email">
            Email:
          </label>
          <input
            className="register-input"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="register-input-group">
          <label className="register-label" htmlFor="password">
            Password:
          </label>
          <input
            className="register-input"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
      <Link to="/" className="login-link">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Register;
