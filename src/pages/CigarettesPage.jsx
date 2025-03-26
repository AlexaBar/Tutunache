import React from "react";
import products from "../api/products";
import "./CigarettesPage.css";

const CigarettesPage = () => {
  const cigaretteProducts = products.filter(p => p.category === "Cigarettes");

  return (
    <div className="category-page">
      <h1>Cigarettes</h1>
      <div className="category-grid">
        {cigaretteProducts.map(product => (
          <div key={product.id} className="category-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CigarettesPage;
