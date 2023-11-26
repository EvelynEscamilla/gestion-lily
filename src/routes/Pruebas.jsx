import React from "react";
import Boton from "../Components/boton/Boton";
import TextField from "../Components/textField/TextField";
import { useState } from "react";
import DropEjemplo from "../Components/Navbar/DropEjemplo";

const Pruebas = () => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
    <Boton BG="turqueza" TC="white">EXAMPLE</Boton>
    <TextField name="ejemplo" type="text" placeholder="EXAMPLE" value={inputValue} onChange={handleInputChange} />
    <DropEjemplo/>
    </>
  );
};

export default Pruebas;