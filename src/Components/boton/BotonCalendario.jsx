import React from "react";

const BotonCalendario = ({ BG, children, TC, type = "button", oC }) => {
  const buttonClasses = `
          group
          relative
          bg-${BG} 
          text-${TC}
          px-3 
          py-2 
          rounded-2xl 
          w-[9rem] 
          font-bold 
          overflow-hidden
          hover:-translate-y-1 
          hover:scale-100 
          duration-200 
          cursor-pointer
          md:text-sm 
          `;

  const divClasses = `
          absolute 
          inset-0 
          w-0 
          bg-morado
          transition-all 
          duration-200 
          ease-out 
          group-hover:w-full
          `;

  const divSpan = `
          relative 
          group-hover:text-white
              `;

            
  return (
    <div className="p-2">
      <button className={buttonClasses} type={type} onClick={oC}>
        <div className={divClasses}></div>
        <span className={divSpan}>{children}</span>
      </button>
    </div>
  );
};

export default BotonCalendario;
