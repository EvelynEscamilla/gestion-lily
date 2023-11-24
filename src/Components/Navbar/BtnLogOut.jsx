import React from "react";

import { useAuth } from "../../context/authContext";

const BtnLogOut = () => {
  const { logOut } = useAuth();
  const handleLogout = () => {
    logOut(); // Ejecuta la función logOut
    window.location.reload(); // Recarga la página
  };
  return (
    <button
      onClick={handleLogout}
      className="dropdown__menu-item px-4 py-1 hover:bg-gray-100 border-b w-full"
    >
      Cerrar Sesion
    </button>
  );
};

export default BtnLogOut;
