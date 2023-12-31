import React from "react";
import { useNavigate } from "react-router-dom";

const BtnLink = ({ BG, children, TC, direccion }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(direccion);
  }
  const buttonClasses = `
        group
        relative
        bg-${BG} 
        text-${TC}
        px-4 
        py-2 
        rounded-3xl 
        overflow-hidden
        lg:text-xl 
        hover:-translate-y-1 
        hover:scale-110 
        duration-200 
        cursor-pointer
        border-2
        border-${BG}
        md:text-base
        `;

  const divClasses = `
        absolute 
        inset-0 
        w-0 
        bg-${TC} 
        transition-all 
        duration-200 
        ease-out 
        group-hover:w-full
        `;

  const divSpan = `
        relative 
        group-hover:text-black
            `;

  return (
    <button className={buttonClasses} onClick={handleClick}>
      
      <div className={divClasses}></div>
      <span className={divSpan}>{children}</span>
    </button>
  );
};

export default BtnLink;
