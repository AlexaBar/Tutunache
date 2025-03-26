import React from "react";
import "./ProductSection.css";

const ProductSection = ({ title, description, image, reverse }) => {
  return (
    <section className={`product-section ${reverse ? "reverse" : ""}`}>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default ProductSection;
