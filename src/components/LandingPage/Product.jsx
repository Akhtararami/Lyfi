import React, { useRef, useEffect, useState } from "react";
import logo from "./../../assets/LandingPage/produk.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    category: "Skincare",
    price: "Rp.100.000,00",
    name: "Scarlet Whitening Facial Wash",
    image: logo,
  },
  {
    id: 1,
    category: "Skincare",
    price: "Rp.100.000,00",
    name: "Scarlet Whitening Facial Wash",
    image: logo,
  },
  {
    id: 1,
    category: "Skincare",
    price: "Rp.100.000,00",
    name: "Scarlet Whitening",
    image: logo,
  },
];

const Product = () => {
  const containerRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    const startScrolling = () => {
      const id = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({
            left: container.clientWidth / 4,
            behavior: "smooth",
          });
        }
      }, 2000);
      setIntervalId(id);
    };

    startScrolling();

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const truncateText = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div>
      <h1 className="container-product-title mt-5" style={{ color: "#B09E7C" }}>
        Our Product
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <button className="me-5" onClick={scrollLeft}>
          <i
            className="fa-solid fa-chevron-left"
            style={{
              color: "#B1A182",
            }}
          ></i>
        </button>
        <div
          className="container-product d-flex d-flex justify-content-center"
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
            width: "72rem", // Adjust this to your container width for 4 blocks
            position: "relative",
          }}
          ref={containerRef}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card m-2 border flex-shrink-0 "
              style={{ width: "18rem" }} // Each block width
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body mt-2">
                <h5 className="text-muted fw-semibold">
                  {truncateText(product.category, 2)}
                </h5>
                <p className="card-title">{truncateText(product.name, 2)}</p>
                <p className="card-text mt-5">
                  {truncateText(product.price, 2)}
                </p>
              </div>
              <Link to={"/InfoProduct"} className="custom-detail-produk">
                <div className="custom-card-footer">Lihat Produk</div>
              </Link>
            </div>
          ))}
        </div>
        <button className="ms-5" onClick={scrollRight}>
          <i
            className="fa-solid fa-chevron-right"
            style={{
              color: "#B1A182",
            }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
