import React, { useState } from "react";
import "./css/FarmerDetails.css";
import logo from "./img/carrot-logo.png";
import {Link} from "react-router-dom";

const FarmerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [farmerDetails, setFarmerDetails] = useState({
    name: "Someone Someone",
    location: "Somewhere Somewhere (address)",
    email: "someone@gmail.com",
    phone: "(671) 555-0110",
    farmerId: "#4152",
    farmSize: "85",
    established: "2014",
    rating: "N/A",
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Red Capsicum", price: 14.0 },
    { id: 2, name: "Green Capsicum", price: 14.0 },
    { id: 3, name: "Green Chili", price: 26.7 },
    { id: 4, name: "Tomato", price: 10.5 },
    { id: 5, name: "Potato", price: 5.0 },
    { id: 6, name: "Carrot", price: 7.2 },
    { id: 7, name: "Cucumber", price: 8.5 },
    { id: 8, name: "Onion", price: 6.3 },
    { id: 9, name: "Garlic", price: 15.0 },
    { id: 10, name: "Pumpkin", price: 20.0 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Calculate pagination indices
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    // Adjust pagination if the last item on the current page is deleted
    if (currentProducts.length === 1 && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="farmer-details">
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

        <section className="user-details">
          <div className="details-header">
            <h2>Farmer Details</h2>
          </div>
          <div className="details-card">
            <div className="info-section">
              <h3>Farmer Information</h3>
              {isEditing ? (
                <>
                  <p>
                    <strong>Name:</strong>{" "}
                    <input
                      type="text"
                      name="name"
                      value={farmerDetails.name}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Location:</strong>{" "}
                    <input
                      type="text"
                      name="location"
                      value={farmerDetails.location}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <input
                      type="email"
                      name="email"
                      value={farmerDetails.email}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <input
                      type="text"
                      name="phone"
                      value={farmerDetails.phone}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Farmer ID:</strong> {farmerDetails.farmerId}
                  </p>
                  <p>
                    <strong>Farm Size:</strong>{" "}
                    <input
                      type="number"
                      name="farmSize"
                      value={farmerDetails.farmSize}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Established:</strong>{" "}
                    <input
                      type="text"
                      name="established"
                      value={farmerDetails.established}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <strong>Rating:</strong>{" "}
                    <input
                      type="text"
                      name="rating"
                      value={farmerDetails.rating}
                      onChange={handleInputChange}
                    />
                  </p>
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {farmerDetails.name}</p>
                  <p><strong>Location:</strong> {farmerDetails.location}</p>
                  <p><strong>Email:</strong> {farmerDetails.email}</p>
                  <p><strong>Phone:</strong> {farmerDetails.phone}</p>
                  <p><strong>Farmer ID:</strong> {farmerDetails.farmerId}</p>
                  <p><strong>Farm Size:</strong> {farmerDetails.farmSize}</p>
                  <p><strong>Established:</strong> {farmerDetails.established}</p>
                  <p><strong>Rating:</strong> {farmerDetails.rating}</p>
                </>
              )}
            </div>
            <div className="action-buttons">
              <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
              <button className="delete">Delete</button>
            </div>
          </div>

              <div className="products">
          <h3>Offering Products</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
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

export default FarmerDetails;
