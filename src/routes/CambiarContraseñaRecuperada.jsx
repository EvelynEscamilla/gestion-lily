import React from 'react'
import { useState } from 'react';

const CambiarContraseñaRecuperada = () => {
    // Estado para almacenar el valor del input
    const [NuevaContra, setNuevaContra] = useState('');
    const [ConfNuevaContra, setConfNuevaContra] = useState('');


    // Función para manejar cambios en el input
    const handleNuevaContra = (event) => {
        setNuevaContra(event.target.value);
    };
    const handleConfNuevaContra = (event) => {
        setConfNuevaContra(event.target.value);
    };




    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className=" bg-white rounded-lg p-4 md:w-1/2 w-screen shadow-lg justify-center items-center">
                    <div className='w-1/2 items-center justify-center ml-auto mr-auto'>
                        <img src="Images/Login/Lily-hor.png" alt="LogoLily" />
                    </div>
                    <div className='py-3'>
                        <p className='text-3xl text-center'>Recuperacion de Contraseña</p>
                    </div>
                    <div className='items-center justify-center text-center'>
                        <p className='text-xl py-3'>Introduce tu nueva contraseña</p>
                        <input
                            className="md:w-1/2 w-3/4  text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                            type="password"
                            placeholder='Nueva Contraseña'
                            onChange={handleNuevaContra}
                            value={NuevaContra}
                        ></input>
                    </div>
                    <div className='items-center justify-center text-center'>
                        <p className='text-xl py-3'>Confirma la contraseña</p>
                        <input
                            className="md:w-1/2 w-3/4  text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                            type="password"
                            placeholder='Nueva Contraseña otra vez'
                            onChange={handleConfNuevaContra}
                            value={ConfNuevaContra}
                        ></input>
                    </div>
                    <div className='text-center items-center justify-center'>
                            <input
                                type="submit"
                                value="Cambiar Contraseña"
                                className="lg:w-1/2 w-[90%] text-xl text-white bg-morado text-center   py-2 rounded-full cursor-pointer"
                            />
                        </div>
                </div>
            </div>
        </>
    )
}

export default CambiarContraseñaRecuperada