import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from './dashboard.module.css';
import axios from '../../utils/axios.js';  // Using custom axios instance

const Dashboard = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const res = await axios.get("/api/user/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setName(res.data.name);
      } catch (error) {
        console.error("Dashboard fetch error:", error.response?.data?.message || error.message);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {name || "User"}!</h1>
      <button onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
