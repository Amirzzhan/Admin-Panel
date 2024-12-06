import React, {useState} from "react";
import "./css/AdminAccount.css";
import logo from './img/carrot-logo.png';
import admin_image from './img/admin-photo.png';
import { Link } from "react-router-dom";

const UserAccountPage = () => {
    //Buttons
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    const [profile, setProfile] = useState({
        name: "Dianne Russell",
        address: "4140 Parker Rd, Allentown, New Mexico 31134",
        email: "dianne.russell@gmail.com",
        phone: "(671) 555-0100"
    });

    const [tempProfile, setTempProfile] = useState({ ...profile });

    const handleEditProfile = () => {
        setIsEditingProfile(true);
    };

    const handleEditAddress = () => {
        setIsEditingAddress(true);
    };

    const handleSave = () => {
        setProfile({ ...tempProfile });
        setIsEditingProfile(false);
        setIsEditingAddress(false);
    };

    const handleCancel = () => {
        setTempProfile({ ...profile });
        setIsEditingProfile(false);
        setIsEditingAddress(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setTempProfile({ ...tempProfile, image: e.target.result });
            };
            reader.readAsDataURL(file); // Converts file to base64
            }
        };



    //
    return (
        <div className="admin-account">
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
                    <text>Admin Dashboard</text>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li className="active"><Link to="/admin-account">Dashboard</Link></li>
                            <li><Link to="/pending-farmers">Pending Farmers</Link></li>
                            <li><Link to="/active-users">Active Users</Link></li>
                            <li><Link to="/login">Log-out</Link></li>
                        </ul>
                    </nav>
                </aside>

                <section className="profile">
                    <div className="profile-card">
                        <img src={admin_image} alt="Admin" className="profile-pic" />
                        {isEditingProfile ? (
                            <>
                                <div className="editable-field">
                                    <label htmlFor="name">Name</label>
                                    <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={tempProfile.name}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="editable-field">
                                <label htmlFor="image-upload">Profile Image</label>
                                <div className="image-edit">
                                    <button onClick={() => document.getElementById("image-upload").click()}>
                                        Change Image
                                    </button>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />
                                </div>
                                </div>
                                <div className="edit-buttons">
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={handleCancel}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>{profile.name}</h2>
                                <p>Admin #123456</p>
                                <button onClick={handleEditProfile}>Edit Profile</button>
                            </>
                        )}
                    </div>

                    <div className="info-card">
                        <h3>Information</h3>
                        {isEditingAddress ? (
                            <>
                                <div className="editable-field">
                                    <label htmlFor="address">Address</label>
                                    <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={tempProfile.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    />
                                </div>
                                <div className="editable-field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={tempProfile.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    />
                                </div>
                                <div className="editable-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={tempProfile.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    />
                                </div>
                                <div className="edit-buttons">
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={handleCancel}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>Address: {profile.address}</p>
                                <p>Email: {profile.email}</p>
                                <p>Phone: {profile.phone}</p>
                                <button onClick={handleEditAddress}>Edit</button>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UserAccountPage;
