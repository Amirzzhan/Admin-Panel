import React, { useState } from 'react';
import './css/PendingFarmers.css';
import { Link } from "react-router-dom";

const PendingFarmers = () => {
    // Initialize farmers data in the state
    const [farmers, setFarmers] = useState([
        { id: 703, name: "Bla bla bla", location: "Somewhere in Astana", status: "Pending" },
        { id: 704, name: "John Doe", location: "Another Place", status: "Pending" },
        { id: 705, name: "Jane Smith", location: "Near Astana", status: "Pending" },
        { id: 706, name: "Alex Johnson", location: "Astana", status: "Pending" },
        { id: 707, name: "Emily Davis", location: "West Side", status: "Pending" },
        { id: 708, name: "Chris Brown", location: "City Center", status: "Pending" },
        { id: 709, name: "Sarah Wilson", location: "Astana Suburb", status: "Pending" },
        { id: 710, name: "Michael Scott", location: "East Town", status: "Pending" },
        { id: 711, name: "Angela Martin", location: "Downtown", status: "Pending" },
        { id: 712, name: "Oscar Martinez", location: "South Side", status: "Pending" },
        { id: 713, name: "Dwight Schrute", location: "Farmville", status: "Pending" },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const farmersPerPage = 4; // Number of farmers displayed per page

    // Calculate the farmers to display based on the current page
    const indexOfLastFarmer = currentPage * farmersPerPage;
    const indexOfFirstFarmer = indexOfLastFarmer - farmersPerPage;
    const currentFarmers = farmers.slice(indexOfFirstFarmer, indexOfLastFarmer);

    // Calculate the total number of pages
    const totalPages = Math.ceil(farmers.length / farmersPerPage);

    // Handle Accept button click
    const handleAccept = (id) => {
        setFarmers(farmers.map(farmer =>
            farmer.id === id ? { ...farmer, status: "Accepted" } : farmer
        ));
    };

    // Handle Reject button click
    const handleReject = (id) => {
        setFarmers(farmers.filter(farmer => farmer.id !== id));
    };

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pending-farmers-page">
            {/* Header */}
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
                        <span>iFarm</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li><Link to="/admin-account">Dashboard</Link></li>
                            <li className="active"><Link to="/pending-farmers">Pending Farmers</Link></li>
                            <li><Link to="/active-users">Active Users</Link></li>
                            <li><Link to="/login">Log-out</Link></li>
                        </ul>
                    </nav>
                </aside>

                <section className="table-section">
                    <h2>Pending Farmers</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Farmer ID</th>
                                <th>Name Surname</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentFarmers.map((farmer) => (
                                <tr key={farmer.id}>
                                    <td>#{farmer.id}</td>
                                    <td>{farmer.name}</td>
                                    <td>{farmer.location}</td>
                                    <td>{farmer.status}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="accept-btn"
                                                onClick={() => handleAccept(farmer.id)}
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className="reject-btn"
                                                onClick={() => handleReject(farmer.id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <span
                                key={index + 1}
                                className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </span>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PendingFarmers;


