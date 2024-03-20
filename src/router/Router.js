import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ExploreCities from "../pages/ExploreCities"
import SearchHotels from "../pages/SearchHotels"
import SearchTransportation from "../pages/SearchTransportation"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore" element={<ExploreCities />} />
      <Route path="/search-hotels" element={<SearchHotels />} />
      <Route path="/search-transportation" element={<SearchTransportation />} />
    </Routes>
  );
};

export default Router;
