import React, { useState } from "react";
import './css/loginForm.css';
import './css/App.css';
import './css/login.css';
import "@fontsource/poppins";
import logo from './img/carrot-logo.png';
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");  // State for email
    const [password, setPassword] = useState("");  // State for password
    const navigate = useNavigate();  // Hook for navigation

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent page refresh
        // Simulate login process
        if (email === "admin@example.com" && password === "password123") {
            alert("Login successful!");
            navigate("/dashboard");  // Redirect to dashboard on success
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="top-bar">
            <div className="top">
                <div className="location">
                    <span>📍 Location: Astana, Kazakhstan</span>
                </div>
                <div className="account-section">
                    <span>Eng</span> <span>KZT</span> |{" "}
                    <Link to="/login">Login/Register</Link> |{" "}
                    <Link to="/admin-account">Admin Account</Link>
                </div>
            </div>

            <div className="nav-main">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span>iFarm</span>
                </div>
                <text>Admin Dashboard</text>
            </div>

            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                required
                            />
                            <span className="show-password">👁</span>
                        </div>
                        <div className="form-options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="/forgot-password">Forgot Password</a>
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                        <div className="register-link">
                            Don’t have an account? <Link to="/create-account">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
