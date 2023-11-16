import { useState } from "react";

import login from "../../assets/Nav/login.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "option1", label: "Citas Programadas" },
    { value: "option2", label: "Historial de Citas" },
    { value: "option3", label: "Administrar servicios" },
    { value: "option4", label: "Administrar citas" },
  ];


  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {

    setIsOpen(false);
  };

  return (
    
      <button
        className="dropdown__toggle relative flex justify-end pr-2"
        onClick={toggleDropdown}
      >
        {<img className="Logoi1   w-14 h-14 md:w-16 md:h-16  " src={login} />}

        {isOpen && (
          <div className="absolute block top-full  justify-end w-[220px] bg-white shadow-md mt-1 rounded transition ">
            <ul className="dropdown__menu text-left border rounded">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="dropdown__menu-item px-4 py-1 hover:bg-gray-100 border-b"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    
  );
}

export default Dropdown;
