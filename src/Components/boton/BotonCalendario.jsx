import React from "react";

const BotonCalendario = ({ BG, children, TC, type = "button", oC, desa = false }) => {
  const buttonStyle = desa
    ? "bg-turqueza bg-opacity-80 text-white  duration-200 hover:bg-opacity-100 cursor-pointer  "
    : "bg-gray-300 text-gray-400 cursor-not-allowed";

  const buttonClasses = `
          px-3 
          py-2 
          rounded-2xl 
          font-bold 
          overflow-hidden
          ${buttonStyle}
          md:text-lg 
          `;

  return (
    <div className="p-2  ">
      <button
        className={buttonClasses}
        type={type}
        onClick={oC}
        disabled={!desa}
      >
        {children}
      </button>
    </div>
  );
};

export default BotonCalendario;
