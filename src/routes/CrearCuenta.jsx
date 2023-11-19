import React from 'react'

import FormSignUp from '../Components/Forms/FormSignUp'

const CrearCuenta = () => {

    

    return (
        <div className="container flex justify-center items-center w-auto h-80% ">
            <div className="relative overflow-hidden w-auto h-80%">
                <img src="Images\CrearCuenta\Spa-img2.jpg" alt="Descripción de la imagen" className="w-full h-auto"></img>
                <div className="text-overlay absolute top-0 right-0 bottom-0 w-1/2 bg-opacity-70 bg-blue-100 text-black p-1 text-center flex flex-col justify-center items-center">
                    <img className="w-1/2 mx-auto py-7 " src="Images/CrearCuenta/Lily-hor.png"></img>
                    <div className="text-[30px] mb-4">
                        <p>Crea una cuenta en nuestro sitio</p>
                    </div>
                    {/* Hacer un componente para los forms */}
                    <FormSignUp />
                </div>
            </div>
        </div>
    )
}

export default CrearCuenta
