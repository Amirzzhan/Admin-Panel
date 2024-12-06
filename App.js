import './css/App.css';
import "@fontsource/poppins";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import AdminAccount from "./AdminAccount";
import PendingFarmers from './PendingFarmers';
import CreateAccount from './CreateAccount';
import OrderHistory from './OrderHistory';
import FarmerDetails from './FarmerDetails';
import ActiveUsers from './ActiveUsers';
import BuyerDetails from "./BuyerDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/admin-account" element={<AdminAccount />} />
        <Route path="/pending-farmers" element={<PendingFarmers />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/farmer-details" element={<FarmerDetails />} />
        <Route path="/active-users" element={<ActiveUsers />} />
        <Route path="/buyer-details" element={<BuyerDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
