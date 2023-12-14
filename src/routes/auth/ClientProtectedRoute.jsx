import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const ClientProtectedRoute = ({ children }) => {
  const { user, loading, userData } = useAuth();

  if (loading) return <LoadingScreen />

  if (!user) return <Navigate to={"/gestion-lily/login"} />;

  if (userData.rol != "cliente") return <Navigate to={"/gestion-lily/login"} />;

  return children;
};

export default ClientProtectedRoute;
