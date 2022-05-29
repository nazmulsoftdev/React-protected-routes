import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogin, children }) {
  if (isLogin === true) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
