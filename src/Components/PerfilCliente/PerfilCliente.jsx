import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Perfil from '../../assets/PerfilCliente/IMG_Perfil.jpg'

export const PerfilCliente = ({ handleScreen }) => {
    return (
        <>
            <Navbar handleScreen={handleScreen} />
            <body className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-4 shadow-lg items-center">
                    <div className='flex items-center p-4'>
                        <div>
                            <img src={Perfil} className="hover:-translate-y-1 hover:scale-110 duration-200 border-[5px] border-morado w-64 h-64 rounded-full" alt="Imagen de perfil" />
                        </div>
                        <div className="ml-4 text-white bg-morado px-5 py-2 rounded-md">
                            <div className='py-3'>
                            <p className="text-xl   font-bold">Nombre de Usuario Cool</p>
                            </div>
                            <div className='py-3'>
                            <span className=" mr-2 text-xl font-bold">Correo electronico: </span>
                            <span className="  text-xl ">CorreoElectronico@Gmail.com</span>
                            </div>
                            <div className='py-3'>
                            <span className="  mr-2 text-xl font-bold">Telefono: </span>
                            <span className=" text-xl">4412345678</span>
                            </div>
                        </div>
                    </div>
                    <div className=" px-4 flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:rounded-lg inset-y-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}
