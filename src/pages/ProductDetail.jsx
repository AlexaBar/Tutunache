import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../api/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="not-found">Product Not Found</h2>;

  // Simulate availability (you can connect this to stock data)
  const inStock = product.id % 2 === 0;

  return (
    <div className="product-detail">
      {/* Breadcrumb / Back link */}
      <div className="breadcrumb">
        <button onClick={() => navigate("/")}>← Back to All Products</button>
      </div>

      <div className="product-detail-container">
        <div className="image-area">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="info-area">
          <h1>{product.name}</h1>
          <h3 className="category">{product.category}</h3>
          <p className="description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className={`availability ${inStock ? "in" : "out"}`}>
            {inStock ? "In Stock" : "Out of Stock"}
          </p>
          <button disabled={!inStock}>
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
