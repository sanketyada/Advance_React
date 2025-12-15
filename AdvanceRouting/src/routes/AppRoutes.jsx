import React from "react";
import { lazy, Suspense } from "react";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import {
  ContactUs,
  Home,
  Product,
  Support,
  YourProduct,
} from "../pages/index.js";
import Layout from "../componnets/layout/Layout.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
// import Test from "../Test.jsx";
const Test = lazy(() => import("../Test.jsx"));
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
          path="/test"
          element={
            <Suspense fallback={<h2>Loading Contact...</h2>} >
              <Test />
            </Suspense>
          }
        />
        <Route
          path="products/:id"
          element={
            <ProtectedRoutes>
              {" "}
              //Your wraped with ProductRoutes it work as Authentication
              <YourProduct />
            </ProtectedRoutes>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
