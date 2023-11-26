import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user, loading, userData } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to={"/gestion-lily/"} />;

  if (userData.rol != "admin") return <Navigate to={"/gestion-lily/login"} />;

  return children;
};

export default AdminProtectedRoute;
