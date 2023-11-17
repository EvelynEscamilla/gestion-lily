import { useState } from "react";
import { Link } from 'react-router-dom'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "/gestion-lily/Perfil", label: "Perfil" },
    { value: "/gestion-lily/Citas-Programadas", label: "Citas Programadas" },
    { value: "/gestion-lily/Historial", label: "Historial de Citas" },
    { value: "option4", label: "Cerrar Sesion" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {

    setIsOpen(false);
  };

  return (

      <button
        className="dropdown__toggle relative flex justify-end pr-2 "
        onClick={toggleDropdown}
      >
<<<<<<< HEAD
        {<img className="Logoi1  h-20  " src="Images/Nav/login.png" />}
=======
        {<img className="Logoi1 w-14 h-14 md:w-16 md:h-16 " src={login} />}
>>>>>>> main

        {isOpen && (
          <div className="absolute block top-full  justify-end w-[200px] bg-white shadow-md mt-1 rounded transition ">
            <ul className="dropdown__menu text-left border rounded">
              {options.map((option) => (
                <Link to={`${option.value}`}>
                <li key={option.value} className="dropdown__menu-item px-4 py-1 hover:bg-gray-100 border-b">
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
