import React from "react";
import Layout from "../components/layout/Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Support from "../pages/Support";
function AppRoute() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoute;
