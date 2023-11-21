import React from "react";

const TextField = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      className="
       my-2
       w-full
       px-4
        py-2
       text-xl
       bg-azulNav
       text-center
         rounded-full 
      "
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextField;
