import React from 'react';
import './css/CreateAccount.css';
import logo from './img/carrot-logo.png';
import {Link} from "react-router-dom";

function CreateAccount() {
    return (
        <div className="create-account">
        {/* Header Section */}
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
                <span>NameName</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
            <span>Admin Account &gt; Register</span>
        </div>

        {/* Create Account Form */}
        <div className="form-container">
            <h2>Create Account</h2>
            <form className="account-form">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Surname" required />
            <div className="password-field">
                <input type="password" placeholder="Password" required />
            </div>
            <div className="password-field">
                <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className="checkbox-field">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">Accept all terms & conditions</label>
            </div>
            <button type="submit" className="create-btn">Create Account</button>
            </form>
            <p className="login-link">
            Already have an account? <a href="/login">Login</a>
            </p>
        </div>
        </div>
    );
    }

export default CreateAccount;

