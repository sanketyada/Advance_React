import React from "react";
import { Navigate } from "react-router-dom";

function ProductRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("token");
  if (!isLoggedIn) {
    console.log("Please insert data in localstorage as =")//localStorage.setItem("token", "abc123")

    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProductRoutes;
