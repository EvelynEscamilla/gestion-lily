import React from "react";
import Boton from "../Components/boton/Boton";
import TextField from "../Components/TextField/TextField";
import { useState } from "react";

const Pruebas = () => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
    <Boton BG="turqueza" TC="white">EXAMPLE</Boton>
    <TextField name="ejemplo" type="text" placeholder="EXAMPLE" value={inputValue} onChange={handleInputChange} />
    
    </>
  );
};

export default Pruebas;
