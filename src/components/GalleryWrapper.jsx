import React from "react";
import { useNavigate } from "react-router-dom";

import products from "../api/products";
import "./GalleryWrapper.css";

const GalleryWrapper = () => {
  const navigate = useNavigate();
  const galleryItems = [...products, ...products];

  return (
    <section className="gallery-wrapper">
       <div className="gallery-heading">
        <h2>Explore Our Tobacco Range</h2>
        <p>A seamless showcase of all your favorite products in motion.</p>
      </div>
      <div className="gallery-track">
        {galleryItems.map((product, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <div className="caption">{product.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default GalleryWrapper;
