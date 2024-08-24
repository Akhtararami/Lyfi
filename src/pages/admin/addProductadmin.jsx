import React, { useState } from "react";
import "./../../componentadmin/Admin.css";
import Sidebar from "./../../componentadmin/sidebar";
import AddProduct from "./../../componentadmin/ProductAdmin/AddProduct";
import "./../../componentadmin/ProductAdmin/AddProduct.css";

const addProductAdmin = () => {
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
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default addProductAdmin;
