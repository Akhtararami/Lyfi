import React, { useState } from "react";
import "./../../componentadmin/Admin.css";
import Sidebar from "./../../componentadmin/sidebar";
import AddBundling from "../../componentadmin/BundlingAdmin/AddBundling.jsx";
import "./../../componentadmin/ProductAdmin/AddProduct.css";

const addBundlingAdmin = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboardadmin">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {!isSidebarOpen && (
        <a href="#" onClick={toggleSidebar} className="open-btn">
          ☰
        </a>
      )}
      <div
        className={`content ${
          isSidebarOpen ? "content-open" : "content-closed"
        }`}
      >
        <div className="main-content">
          <AddBundling />
        </div>
      </div>
    </div>
  );
};

export default addBundlingAdmin;
