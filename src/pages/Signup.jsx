import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }

    // Create new user
    const newUser = {
      name,
      email,
      phone,
      password,
    };

    // Save user
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");

    // Redirect to Login
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Side */}
        <div className="login-left">
          <h1>Join Decorio</h1>
          <p>Create your account to explore beautiful interior designs.</p>

          <Link to="/">
            <button>Explore Designs</button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="login-card">

            <h2>Create Account</h2>

            <form onSubmit={handleSignup}>

              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <FaPhone />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Create Account
              </button>

            </form>

            <div className="signup-link">
              Already have an account?{" "}
              <Link to="/login">Sign In</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;