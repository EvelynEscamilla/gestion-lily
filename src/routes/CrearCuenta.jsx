import React from 'react'

import FormSignUp from '../Components/Forms/FormSignUp'

const CrearCuenta = () => {
    const divStyle = {
        backgroundImage: `url("Images/Login/Spa-img2.jpg")`,
    };


    return (
        <div className=" flex justify-center items-center">
            <div
                className=" w-5/6 h-screen justify-end flex bg-cover bg-center"
                style={divStyle}
            >
                    <div className="relative overflow-hidden w-auto h-screen">
                    <img src="Images\CrearCuenta\Spa-img2.jpg" alt="Descripción de la imagen" className="w-full h-screen"></img>
                    <div className="text-overlay absolute top-0 right-0 bottom-0 h-full lg:w-1/2 w-full bg-opacity-75 lg:bg-opacity-90 bg-blue-100 text-black p-1 text-center flex flex-col justify-center items-center">
                        <img className="lg:w-1/2 w-[40%] mx-auto py-2 " src="Images/CrearCuenta/Lily-hor.png"></img>
                        <div className="text-[30px] mb-4">
                            <p>Crea una cuenta en nuestro sitio</p>
                        </div>
                        {/* Hacer un componente para los forms */}
                        <FormSignUp />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CrearCuenta
