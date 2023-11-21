import React from 'react'

const CrearCuenta = () => {
    return (
        <>
            <div className="container flex justify-center items-center w-auto h-80% ">
                <div className="relative overflow-hidden w-auto h-80%">
                    <img src="Images\CrearCuenta\Spa-img2.jpg" alt="Descripción de la imagen" className="w-full h-auto"></img>
                    <div className="text-overlay absolute top-0 right-0 bottom-0 w-1/2 bg-opacity-70 bg-blue-100 text-black p-1 text-center flex flex-col justify-center items-center">
                        <img className="w-1/2 mx-auto py-7 " src="Images/CrearCuenta/Lily-hor.png"></img>
                        <div className="text-[30px] mb-4">
                            <p>Crea una cuenta en nuestro sitio</p>
                        </div>
                        <form className="text-center">
                            <input className=" w-[300px] h-10 bg-azulNav text-center rounded-full mb-4" type="text" placeholder="Correo electrónico"></input>
                            <br />
                            <input className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="text" placeholder="Contraseña"></input>
                            <input className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="text" placeholder="Confirmar Contraseña"></input>
                            <p className="texto-fuente">
                                Utiliza mínimo ocho caracteres combinados
                            </p>
                            <p className="texto-fuente">
                                Letras, números y símbolos
                            </p>
                            <div className="mt-4">
                                <input
                                    type="submit"
                                    value="Cancelar"
                                    className="text-[20px] text-white bg-morado m-2 px-4 py-2  rounded-full cursor-pointer float-left"
                                ></input>
                                <input
                                    type="submit"
                                    value="Crear Cuenta"
                                    className="text-[20px] text-white bg-morado m-2 px-4 py-2 rounded-full cursor-pointer float-right"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrearCuenta
