import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProductTable from "./../BundlingAdmin/PilihProduk";
import produk from "./../../assets/LandingPage/about.png";
const PilihProdukModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = [
    {
      name: "Moisturizer A",
      price: "Rp 150.000",
      details: "Pelembab dengan kandungan alami",
      image: produk, // Ganti dengan URL gambar yang sesuai
      category: "Moisturizer",
    },
    {
      name: "Serum B",
      price: "Rp 200.000",
      details: "Serum untuk kulit wajah",
      image: produk, // Ganti dengan URL gambar yang sesuai
      category: "Serum",
    },
    // Tambahkan lebih banyak produk jika diperlukan
  ];

  return (
    <>
      <a href="#" className="modal-produk" onClick={handleShow}>
        <i class="fa-solid fa-arrow-up me-3"></i>Pilih Produk
      </a>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Pilih Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductTable products={products} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#968a50",
              border: "none",
              width: "100%",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PilihProdukModal;
