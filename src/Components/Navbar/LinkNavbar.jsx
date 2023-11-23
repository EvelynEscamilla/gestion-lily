import React from "react";
import { Link } from "react-router-dom";

const LinkNavbar = ({ direccion, children }) => {
  return (
    <Link
      to={direccion}
      className="dropdown__menu-item px-4 py-1 hover:bg-gray-100 border-b w-full justify-center text-center"
    >
      {children}
    </Link>
  );
};

export default LinkNavbar;
