import { useState } from "react";
import { Link } from 'react-router-dom'


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "/gestion-lily/Gestion-Citas", label: "Citas Programadas" },
    { value: "/gestion-lily/Historial-Mes", label: "Historial de Citas" },
    { value: "/gestion-lily/Gestion-Servicios", label: "Administrar servicios" },
    { value: "/gestion-lily/Gestion-Citas", label: "Administrar citas" },
    { value: "/gestion-lily/EditarAdmin", label: "Editar datos"},
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
        {<img className="Logoi1  h-20  " src="Images/Nav/login.png" />}

        {isOpen && (
          <div className="absolute block top-full  justify-end w-[220px] bg-white shadow-md mt-1 rounded transition ">
            <ul className="dropdown__menu text-left border rounded">
              {options.map((option) => (
                 <Link to={`${option.value}`}>
                <li key={option.value} className="dropdown__menu-item px-4 py-1 hover:bg-gray-100 border-b" onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </button>
    
  );
}

export default Dropdown;
