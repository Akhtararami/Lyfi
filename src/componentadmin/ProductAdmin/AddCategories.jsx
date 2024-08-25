import React from "react";
import { Link } from "react-router-dom";

const AddCategories = () => {
  return (
    <>
      <div className="addproduct text-start mt-5">
        <div className="header-addproduct">
          <h1>Buat Kategori</h1>
        </div>
        <div className="form-addproduct">
          <div className="addproduct-input row">
            <label htmlFor="addproduct">Nama Kategori :</label>
            <input type="text" placeholder="Your Answer" />
          </div>
        </div>
        <a href="">
          <button className="addproduct-save d-flex justify-content-center align-items-center">
            <i class="fa-regular fa-floppy-disk me-2"></i>{" "}
            <span className="d-none d-md-block">Save Changes</span>
          </button>
        </a>
        <Link to="/admin/productadmin" href="">
          <button className="addproduct-back d-flex justify-content-center align-items-center">
            <i class="fa-regular fa-circle-left me-2"></i>{" "}
            <span className="d-none d-md-block">Kembali</span>
          </button>
        </Link>
      </div>
    </>
  );
};
export default AddCategories;
