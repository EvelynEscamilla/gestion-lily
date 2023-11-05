import { useState } from "react";

import login from "../../assets/Nav/login.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "option1", label: "Citas Programadas" },
    { value: "option2", label: "Historial de Citas" },
    { value: "option3", label: "Administrar citas" },
  ];


  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {

    setIsOpen(false);
  };

  return (
    <div className="dropdown w-[260px] h-20 flex items-center space-x-2 justify-center">
      <button
        className="dropdown__toggle relative flex justify-end pr-2"
        onClick={toggleDropdown}
      >
        {<img className="Logoi1  h-20  " src={login} />}

        {isOpen && (
          <div className="absolute block top-full  justify-end w-[200px] bg-white shadow-md mt-1 rounded transition ">
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
    </div>
  );
}

export default Dropdown;
