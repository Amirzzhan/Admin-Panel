import React from 'react';
import './css/OrderHistory.css';
import { Link } from "react-router-dom";


function OrderHistory() {
    return (

        <div className="order-history">
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
                <img src={require('./img/carrot-logo.png')} alt="logo" />
                <span>NameName</span>
            </div>
            </div>
        </div>

        {/* Navigation Sidebar */}
        <div className="main-content">
            <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/admin-account">Dashboard</Link></li>
                    <li><Link to="/pending-farmers">Pending Farmers</Link></li>
                    <li><Link to="/active-users">Active Users</Link></li>
                    <li><Link to="/login">Log-out</Link></li>
                </ul>
            </nav>
            </aside>

            {/* Order Details */}
            <section className="order-details">
            <div className="order-header">
                <h2>Order Details</h2>
                <p>April 24, 2023 · 3 Products</p>
                <a href="/active-users" className="back-to-list">Back to List</a>
            </div>

            <div className="order-info">
                <div className="billing-address">
                <h3>Billing Address</h3>
                <p>Someone Someone</p>
                <p>Somewhere Somewhere (address)</p>
                <p>Email: someone@gmail.com</p>
                <p>Phone: (671) 555-0110</p>
                </div>

                <div className="shipping-address">
                <h3>Shipping Address</h3>
                <p>Someone Someone</p>
                <p>Somewhere Somewhere (address)</p>
                <p>Email: someone@gmail.com</p>
                <p>Phone: (671) 555-0110</p>
                </div>

                <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Order ID: #4152</p>
                <p>Payment Method: Kaspi</p>
                <p>Subtotal: $365.00</p>
                <p>Discount: 20%</p>
                <p>Shipping: Free</p>
                <p className="total">Total: $84.00</p>
                </div>
            </div>

            {/* Order Status */}
            <div className="order-status">
                <h3>Order Status: Delivered</h3>
            </div>


            {/* Product List */}
            <table className="product-list">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Red Capsicum</td>
                    <td>$14.00</td>
                    <td>x5</td>
                    <td>$70.00</td>
                </tr>
                <tr>
                    <td>Green Capsicum</td>
                    <td>$14.00</td>
                    <td>x2</td>
                    <td>$28.00</td>
                </tr>
                <tr>
                    <td>Green Chili</td>
                    <td>$28.50</td>
                    <td>x10</td>
                    <td>$285.00</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        </div>
    );
}

export default OrderHistory;
