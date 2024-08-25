import React from "react";
import girl from "./../../assets/LandingPage/about.png";

const Header = () => {
  return (
    <>
      <div className="section-header d-flex ms-2 mb-3 justify-content-between">
        <div className="header-left text-left">
          <h1 className="fw-bold">Dashboard</h1>
          <p className="ms-5">Hi admin, Welcome to Dashboard</p>
        </div>
        <div className="header-right d-flex ">
          <p className="mt-3 d-none d-md-block">Admin</p>

          <img className="ms-2 img-admin" src={girl} alt="" />
        </div>
      </div>
    </>
  );
};
export default Header;
