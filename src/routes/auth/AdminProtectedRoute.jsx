import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const AdminProtectedRoute = ({ children }) => {
  const { user, loading, userData } = useAuth();

  if (loading) return <LoadingScreen />

  if (!user) return <Navigate to={"/gestion-lily/login"} />;

  if (userData.rol != "admin") return <Navigate to={"/gestion-lily/"} />;

  return children;
};

export default AdminProtectedRoute;
