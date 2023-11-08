import React from 'react'

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const EditarAdmin = ({ handleScreen }) => {
    return (
        <>
            <Navbar handleScreen={handleScreen}></Navbar>
            <div className="flex justify-center ml-8 mt-24">
                <p className="font-medium justify-center text-4xl">Editar informacion de Administrador</p>
            </div>

            <div>
                <section className="p-6  text-black mb-24">
                    <form
                        action=""
                        className="container flex flex-col mx-auto space-y-12"
                    >
                        <div className=" p-6 rounded-md shadow-sm bg-azulClaro">

                            <div className="grid grid-cols-6 gap-4  col-span-full ">
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-xl">Nombre de Usuario</label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        placeholder=""
                                        className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-xl">Nueva contraseña</label>
                                    <input
                                        id="precio"
                                        type="password"
                                        className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-xl">Confirmar contraseña</label>
                                    <input
                                        id="tipo"
                                        type="password"
                                        className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 p-2 "
                                    />
                                </div>

                                <div className="col-span-full sm:col-span-2 sm:translate-y-7 ">
                                    <button
                                        type="button"
                                        className="px-4 py-2 rounded-3xl inline-block bg-morado text-white text-xl  w-full"
                                    >
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

export default EditarAdmin