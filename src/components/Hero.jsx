import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Premium Cigars</h1>
        <p className="hero-subtitle">Crafted to perfection. Rich, smooth, unforgettable.</p>
        <div className="hero-buttons">
          <button className="btn">Shop Now</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
