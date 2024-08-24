import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/LandingPage/LYFI.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <a href="#" onClick={toggleSidebar} className="toggle-btn">
          ×
        </a>
      )}
      <img src={logo} alt="LYFI Logo" className="mt-5" />
      <ul className="sidebar-nav flex-column">
        <Link
          to="/admin/dashboardadmin"
          className="sidebar-link active "
          href="#"
        >
          <li className="sidebar-item">
            <i class="fa-solid fa-cubes-stacked pe-3"></i>
            Dashboard
          </li>
        </Link>
        <Link to="/admin/Productadmin" className="sidebar-link">
          <li className="sidebar-item">
            <i class="fa-solid fa-cart-shopping pe-3"></i>
            Produk
          </li>
        </Link>
        <Link to="/admin/bundlingadmin" className="sidebar-link" href="#">
          <li className="sidebar-item">
            <i class="fa-solid fa-cube pe-3"></i>
            Bundling
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
