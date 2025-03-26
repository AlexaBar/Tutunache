import React from "react";

import products from "../api/products";
import "../pages/CategoryPage.css";


const CategoryPage = ({ category }) => {
  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="category-page">
      <h1>{category}</h1>
      <div className="category-grid">
        {filteredProducts.map(product => (
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

export default CategoryPage;
