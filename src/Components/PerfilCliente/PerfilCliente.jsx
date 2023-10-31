import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Perfil from '../../assets/PerfilCliente/IMG_Perfil.jpg'

export const PerfilCliente = ({ handleScreen }) => {
    return (
        <>
            <Navbar handleScreen={handleScreen} />
            <body className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-teal-100 rounded-lg p-4 shadow-lg items-center">
                    <div className='flex items-center p-4'>
                        <div>
                            <img src={Perfil} className="w-48 h-48 rounded-full" alt="Imagen de perfil" />
                        </div>
                        <div className="ml-4">
                            <p className="text-xl font-bold">Nombre de Usuario</p>
                        </div>
                    </div>
                    <br></br>
                    <p className="text-xl font-bold">Correo electronico:</p>
                    <p>Correo@gmail.com</p>
                    <br></br>
                    <p className="text-xl font-bold">Numero de telefono:</p>
                    <p>4412345678</p>
                    <br></br>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:rounded-lg inset-y-0 left-0 ">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full mr-4 hover:rounded-lg inset-y-0 right-0 ">Eliminar cuenta</button>
                </div>
            </body>
            <Footer />
        </>
    )
}
