import React, { useState } from "react";
import "./css/ActiveUsers.css";
import logo from "./img/carrot-logo.png";
import { Link } from "react-router-dom";

const ActiveUser = () => {
    const [activeTab, setActiveTab] = useState("farmers"); // State for active tab
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const usersPerPage = 5; // Number of users displayed per page

    const allFarmers = Array.from({ length: 15 }, (_, i) => ({
        id: `#${703 + i}`,
        name: `Farmer ${i + 1}`,
        location: `Region ${Math.ceil((i + 1) / 5)}, Kazakhstan`,
    }));

    const allBuyers = Array.from({ length: 10 }, (_, i) => ({
        id: `#${900 + i}`,
        name: `Buyer ${i + 1}`,
        location: `City ${i + 1}, Kazakhstan`,
    }));

    const displayedUsers = activeTab === "farmers" ? allFarmers : allBuyers;

    // Pagination logic
    const totalPages = Math.ceil(displayedUsers.length / usersPerPage);
    const paginatedUsers = displayedUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset to the first page when the tab changes
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="active-user-page">
            {/* Top Bar Section */}
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
                        <img src={logo} alt="Logo" />
                        <span>iFarm</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li><a href="/admin-account">Dashboard</a></li>
                            <li><a href="/pending-farmers">Pending Farmers</a></li>
                            <li className="active"><a href="/active-users">Active Users</a></li>
                            <li><a href="/login">Log-out</a></li>
                        </ul>
                    </nav>
                </aside>
                <section className="table-section">
                    <div className="tabs">
                        <button
                            className={activeTab === "farmers" ? "active" : ""}
                            onClick={() => handleTabChange("farmers")}
                        >
                            Active Farmers
                        </button>
                        <span>/</span>
                        <button
                            className={activeTab === "buyers" ? "active" : ""}
                            onClick={() => handleTabChange("buyers")}
                        >
                            Active Buyers
                        </button>
                    </div>
                    <h2>{activeTab === "farmers" ? "Active Farmers" : "Active Buyers"}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                       <tbody>
    {paginatedUsers.map((user) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
                {activeTab === "farmers" ? (
                    <Link
                        to={`/farmer-details/${user.id}`}
                        className="view-details"
                    >
                        View Details
                    </Link>
                ) : (
                    <Link
                        to={`/buyer-details/${user.id}`}
                        className="view-details"
                    >
                        View Details
                    </Link>
                )}
            </td>
        </tr>
    ))}
</tbody>

                    </table>

                    {/* Pagination */}
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                className={currentPage === i + 1 ? "page-number active" : "page-number"}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ActiveUser;
