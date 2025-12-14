import React from "react";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import { ContactUs, Home, Support, Product,YourProduct } from "../pages/index.js";
import Layout from "../componnets/layout/Layout.jsx";
import ProductRoutes from "./ProductRoutes.jsx";
// element={<Product />}
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="products/:id"
          element={
            <ProductRoutes>  //Your wraped with ProductRoutes it work as Authentication
              <YourProduct />
            </ProductRoutes>
          }
          
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
