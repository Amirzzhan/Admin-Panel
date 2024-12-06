import React from "react";
import "./css/Settings.css";
import { Link } from "react-router-dom";
import logo from "./img/carrot-logo.png";

const Settings = () => {
    return (
        <div className="settings-page">
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
            <text>Admin Account - Settings</text>
            </div>

            <div className="nav-links">
            <div className="stack">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
            <aside className="sidebar">
            <nav>
                <ul>
                <li>
                    <Link to="/admin-account">Dashboard</Link>
                </li>
                <li>
                    <Link to="/order-history">Order History</Link>
                </li>
                <li>
                    <Link to="/pending-farmers">Pending Farmers</Link>
                </li>
                <li>
                    <Link to="/active-users">Active Users</Link>
                </li>
                <li className="active">
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/login">Log-out</Link>
                </li>
                </ul>
            </nav>
            </aside>

            <section className="settings-content">
            <div className="settings-section">
                <h3>Admin Account Settings</h3>
                <div className="account-settings">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Dianne" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Russell" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="dianne.russell@gmail.com" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="(603) 555-0123" />
                </div>
                <div className="form-group">
                    <button className="save-button">Save Changes</button>
                </div>
                </div>
            </div>

            <div className="settings-section">
                <h3>Change Password</h3>
                <div className="change-password">
                <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button className="save-button">Change Password</button>
                </div>
                </div>
            </div>
            </section>
        </div>

        {/* Footer Section */}
        <footer className="footer">
            <div className="newsletter">
            <p>Subscribe to our Newsletter</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
            </div>
            <div className="footer-links">
            <p>Contact: (123) 456-7890</p>
            <p>Email: namename@gmail.com</p>
            </div>
        </footer>
        </div>
    );
};

export default Settings;

