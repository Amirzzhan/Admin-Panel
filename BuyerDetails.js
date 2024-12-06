import React, { useState } from "react";
import "./css/BuyerDetails.css";
import logo from "./img/carrot-logo.png";
import { Link } from "react-router-dom";

const BuyerDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const buyersPerPage = 5;

  // Sample buyer data
  const [buyers] = useState([
    { id: 1, username: "John Doe", date: "2024-11-18", time: "14:30", progress: "Ordered" },
    { id: 2, username: "Jane Smith", date: "2024-11-18", time: "15:00", progress: "In Progress" },
    { id: 3, username: "Alice Brown", date: "2024-11-18", time: "16:15", progress: "On the Way" },
    { id: 4, username: "Bob White", date: "2024-11-18", time: "17:00", progress: "Delivered" },
    { id: 5, username: "Chris Green", date: "2024-11-19", time: "09:00", progress: "Ordered" },
    { id: 6, username: "Patricia Blue", date: "2024-11-19", time: "10:45", progress: "In Progress" },
  ]);

  // Pagination logic
  const indexOfLastBuyer = currentPage * buyersPerPage;
  const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
  const currentBuyers = buyers.slice(indexOfFirstBuyer, indexOfLastBuyer);

  const totalPages = Math.ceil(buyers.length / buyersPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="buyer-details">
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

        <section className="user-details">
          <div className="details-header">
            <h2>Buyer Details</h2>
          </div>
          <div className="products">
            <h3>Order List</h3>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentBuyers.map((buyer) => (
                  <tr key={buyer.id}>
                    <td>{buyer.username}</td>
                    <td>{buyer.date}</td>
                    <td>{buyer.time}</td>
                    <td>{buyer.progress}</td>
                    <td>
                    <Link to={`/order-history`} className="view-details">View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BuyerDetails;
