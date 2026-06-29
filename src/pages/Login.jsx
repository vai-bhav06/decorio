import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser = users.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (!foundUser) {
      alert("Invalid Email or Password");
      return;
    }

    // Save login session
    localStorage.setItem("user", JSON.stringify(foundUser));
    localStorage.setItem("activeUser", JSON.stringify(foundUser));
    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful!");

    // Refresh navbar
    window.dispatchEvent(new Event("storage"));

    navigate("/profile");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left */}
        <div className="login-left">
          <h1>Welcome Back</h1>
          <p>Login to continue your journey.</p>

          <Link to="/">
            <button type="button">Explore Designs</button>
          </Link>
        </div>

        {/* Right */}
        <div className="login-right">
          <div className="login-card">

            <h2>Sign In</h2>

            <form onSubmit={handleLogin}>

              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Sign In
              </button>

            </form>

            <div className="signup-link">
              Don't have an account?{" "}
              <Link to="/signup">Create Account</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;