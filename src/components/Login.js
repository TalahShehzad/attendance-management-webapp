import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    if (email && password) {
      // Clear any previous error messages
      setError("");
      // Navigate to the dashboard
      navigate("/dashboard");
    } else {
      // Set an error message if the form is incomplete
      setError("Please fill in both fields.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-input-group">
          <label className="login-label" htmlFor="email">
            Email:
          </label>
          <input
            className="login-input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-group">
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <Link to="/register" className="register-link">
        Register
      </Link>
    </div>
  );
};

export default Login;
