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
        <a href="" className="kembali">
          <button className="addproduct-save">Save Changes</button>
        </a>
        <Link to="/admin/productadmin" href="" >
          <button className="addproduct-back">Kembali</button>
        </Link>
      </div>
    </>
  );
};
export default AddCategories;
