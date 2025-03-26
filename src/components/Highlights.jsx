import React from "react";
import products from "../api/products";
import "./Highlights.css";
import { useNavigate } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();

  return (
    <div className="product-section-wrapper">
      {products.map((product, index) => (
        <section
          key={product.id}
          className={`product-section ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="product-image">
            <img src={product.image} alt={product.name} className="product-img" />
          </div>
          <div className="product-text">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={() => navigate(`/product/${product.id}`)}>Learn More</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Highlights;