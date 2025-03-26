import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => handleNavClick("/")}>
          🔥
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li onClick={() => handleNavClick("/cigarettes")}>Cigarettes</li>
          <li onClick={() => handleNavClick("/cigars")}>Cigars</li>
          <li onClick={() => handleNavClick("/vapes")}>Vapes</li>
          <li onClick={() => handleNavClick("/hookahs")}>Hookahs</li>
          <li onClick={() => handleNavClick("/rolling-papers")}>Rolling Papers</li>
          <li onClick={() => handleNavClick("/snuff")}>Snuff</li>
          <li onClick={() => handleNavClick("/accessories")}>Accessories</li>
          <li onClick={() => handleNavClick("/support")}>Support</li>
          <li className="icon" onClick={() => setSearchOpen(!searchOpen)}>🔍</li>
          <li className="icon" onClick={() => handleNavClick("/cart")}>🛒</li>
        </ul>
      </div>
      
      {searchOpen && (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </nav>
  );
};

export default Navbar;
