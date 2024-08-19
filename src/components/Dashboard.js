import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/dashboard.css";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick("view-attendance")}
            >
              View Attendance
            </button>
            {activeMenu === "view-attendance" && (
              <ul className="submenu">
                <li>
                  <Link to="/view-leaves" className="submenu-link">
                    View Leaves
                  </Link>
                </li>
                <li>
                  <Link to="/view-attendance" className="submenu-link">
                    View Attendance
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleMenuClick("mark-attendance")}
            >
              Mark Attendance
            </button>
            {activeMenu === "mark-attendance" && (
              <ul className="submenu">
                <li>
                  <Link to="/mark-leaves" className="submenu-link">
                    Mark Leaves
                  </Link>
                </li>
                <li>
                  <Link to="/mark-attendance" className="submenu-link">
                    Mark Attendance
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <Link to="/edit-profile" className="menu-button">
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>Select a menu item from the sidebar to proceed.</p>
      </div>
    </div>
  );
};

export default Dashboard;
