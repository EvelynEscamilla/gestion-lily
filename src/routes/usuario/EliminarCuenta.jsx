import React from 'react'
import { useState } from 'react';
import Boton from '../../Components/boton/Boton';

const EliminarCuenta = () => {
    // Estado para almacenar el valor del input
    const [NombreUsuario, setValorNombre] = useState('');
    const [Contraseña, setValorContraseña] = useState('');


    // Función para manejar cambios en el input
    const handleChangeNom = (event) => {
        setValorNombre(event.target.value);
    };

    const handleChangeContraseña = (event) => {
        setValorContraseña(event.target.value);
    };


    return (
        <>
            <body className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-4 shadow-lg items-center">
                    <div className='flex flex-col items-center p-4 text-lg font-semibold'>
                        <p>Estas a punto de eliminar tu cuenta de forma permanente.</p>
                        <p>¿Deseas continuar?</p>

                    </div>
                    <div className="flex justify-between items-center px-4 space-x-5">
                        <Boton BG="morado" TC="white" onClickEvent={(e) => { e.preventDefault(); window.history.back()}}>Cancelar</Boton>
                        <Boton BG="red-600" TC="white">Eliminar cuenta</Boton>
                    </div>
                </div>
            </body>
        </>
    )
}

export default EliminarCuenta