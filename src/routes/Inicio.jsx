import React, { useState } from 'react'

//Falta importar imagenes

const Inicio = () => {

    const [infoDiv, setInfoDiv] = useState(1);

    const handleClick = () => {
        setInfoDiv(infoDiv + 1);
    }

    const handleClick1 = () => {
        setInfoDiv(infoDiv - 1);
    }

    return (
        <>
            <br></br>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Images/Inicio/Ca-img1.jpg" className="d-block w-100" alt="Ca 1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img2.jpg" className="d-block w-100" alt="Ca 2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img3.jpg" className="d-block w-100" alt="Ca 3"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="texto1 bg-blue-100 p-4 text-2xl text-center text-black">
                Tratamientos más populares
            </div>
            <br></br>
            <div className="contenedor flex justify-center items-end h-96">
                <div className="imagen-contenedor flex justify-between max-w-screen-lg w-full">
                    <div className="rounded-[10%] overflow-hidden bg-morado  h-96 relative hover:-translate-y-1 hover:scale-110 duration-200 w-[30%]">
                        <img src="Images/Inicio/Mp-img1.jpg"  alt="Imagen 1" className=" w-full h-full object-cover"></img>
                        <div className="bg-morado bg-opacity-70  text-white text-center p-2 absolute bottom-0 left-0 w-full">
                            <p className="text-lg font-bold">Botox Facial</p>
                        </div>
                    </div>
                    <div className="rounded-[10%] overflow-hidden w-[30%] h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
                        <img src="Images/Inicio/Mp-img2.jpg"  alt="Imagen 2" className="w-full h-full object-cover"></img>
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full">
                            <p className="text-lg font-bold">Oxígeno</p>
                        </div>
                    </div>
                    <div className="rounded-[10%] overflow-hidden w-[30%] h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
                        <img src="Images/Inicio/Mp-img3.jpg"  alt="Imagen 3" className="w-full h-full object-cover"></img>
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full">
                            <p className="text-lg font-bold">Carboxiterapia</p>
                        </div>
                    </div>
                </div>
                {infoDiv == 1 ?
                    <img className=" fixed bottom-0 rounded-full bg-azulNav border-3 border-morado shadow-lg p-2 right-0 h-24 mx-2 my-4 hover:-translate-y-1 hover:scale-110 duration-200 " src="Images/Inicio/logosolito.svg" alt="Mi Imagen Fija" onClick={() => handleClick()}></img>
                    :
                    <div className=' z-50'>
                        <img className=" fixed bottom-[19rem] rounded-full p-2 right-0 w-12 mx-2 mb-[2rem] hover:-translate-y-1 hover:scale-110 duration-200 bg-azulClaro" src="Images/Inicio/delete-button.png" alt="Mi Imagen Fija" onClick={() => handleClick1()}></img>
                        <div className='chatScreen fixed bottom-0 right-0 m-2 rounded-xl shadow-2xl border-3 h-[20rem] w-80 bg-azulNav border-morado text-white' >
                            <p className='bg-turqueza p-1 m-3 rounded-lg w-36 selection:bg-morado' >
                                ¡Hola! ¿En qué puedo ayudarte?
                            </p>
                            <div className='Preg absolute bottom-0 bg-azulClaro rounded-b-xl w-full h-21'>
                                <p className=' ml-1'>Preguntas Frecuentes:</p>
                                <div className='flex flex-row pb-2'>
                                    <select className='pregFrec bg-azulClaro selection:bg-morado rounded-2xl p-1 w-48'>
                                        <option value="1">¿Donde se ubica la clinica?</option>
                                        <option value="2">¿Que servicios ofrecen?</option>
                                        <option value="3">¿Que metodos de pago se aceptan?</option>
                                    </select>
                                    <button className=' bg-morado hover:bg-[#6f789f] p-3 rounded-2xl text-lg w-full mx-2'>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <br></br><br></br>
        </>
    )
}

export default Inicio