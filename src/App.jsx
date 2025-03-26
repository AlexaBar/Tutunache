// File: src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import ProductDetail from "./pages/ProductDetail";
import CigarettesPage from "./pages/CigarettesPage";
import CigarsPage from "./pages/CigarsPage";
import VapesPage from "./pages/VapesPage";
import HookahsPage from "./pages/HookahsPage";
import RollingPapersPage from "./pages/RollingPapersPage";
import SnuffPage from "./pages/SnuffPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import GalleryWrapper from "./components/GalleryWrapper";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Highlights />
            <GalleryWrapper />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cigarettes" element={<CigarettesPage />} />
        <Route path="/cigars" element={<CigarsPage />} />
        <Route path="/vapes" element={<VapesPage />} />
        <Route path="/hookahs" element={<HookahsPage />} />
        <Route path="/rolling-papers" element={<RollingPapersPage />} />
        <Route path="/snuff" element={<SnuffPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/search" element={<div>Search Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
