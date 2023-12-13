import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import btnDesplegar from '../assets/Inicio/desplegar.png'
const Inicio = () => {

    const [isShowing, setIsShowing] = useState(false)
    const [infoDiv, setInfoDiv] = useState(1);
    useEffect(() => {

        setIsShowing((isShowing) => true)

    }, [])

    const handleClick = () => {
        setInfoDiv(infoDiv + 1);
    }

    const handleClick1 = () => {
        setInfoDiv(infoDiv - 1);
    }


    return (
        <>




            <div className='Bienvenida w-full flex flex-col items-center pb-24 justify-center h-screen'>
                <Transition className='w-full flex flex-col items-center pb-24 justify-center h-screen '
                    show={isShowing}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100 "
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <img className="Logo w-10/12 sm:w-8/12 md:1/2 lg:w-5/12 " src="Images/Nav/Logo.svg" />

                    <p className='text-lg sm:text-xl lg:text-4xl font-bold text-turqueza'>Cuidando tu belleza,<span className='text-[#3370b1]'> cuidamos de tí</span></p>
                    <img src={btnDesplegar} alt="desplegar" className='absolute bottom-5 w-16 hover:scale-110 duration-500' onClick={() => document.getElementById("carouselExample").scrollIntoView({ behavior: 'smooth' })} />

                </Transition>

            </div>

            <div id="carouselExample" className="carousel slide ">
                <div className="carousel-inner max-h-[315px] items-center justify-center">
                    <div className="carousel-item active">

                        <img src="Images/Inicio/Ca-img1.jpg" className=" w-full object-cover " alt="Ca 1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img2.jpg" className=" w-full object-cover" alt="Ca 2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/ins13.jpg" className=" w-full object-cover " alt="Ca 3"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img3.jpg" className=" w-full object-cover" alt="Ca 4"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/ins9.jpg" className=" w-full object-cover " alt="Ca 5"></img>
                    </div>
                    <div className="carousel-item ">
                        <img src="Images/Inicio/ins3.jpg" className=" w-full object-cover" alt="Ca 6"></img>

                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img3.jpg" className=" w-full object-cover" alt="Ca 3"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/ins9.jpg" className=" w-full object-cover " alt="Ca 1"></img>
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
            <div className="bg-blue-100 p-4 text-2xl text-center text-black ">
                Tratamientos más populares
            </div>
            <div className="flex justify-center text-center items-center h-full w-full mb-14 mt-14">
                <div className=" justify-center items-center text-center max-w-screen-lg w-full grid grid-rows-3 gap-y-6 lg:grid-cols-3 lg:grid-rows-1 lg:gap-[11%]">
                    <div className="text-center rounded-[10%] overflow-hidden bg-morado h-96 relative hover:-translate-y-1 hover:scale-110 duration-200 w-64">
                        <img src="Images/Inicio/Mp-img4.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full flex justify-center items-center">
                            <p className="text-lg font-bold">Reduccion de Medicas</p>
                        </div>
                    </div>
                    <div className="rounded-[10%] overflow-hidden w-64 h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
                        <img src="Images/Inicio/Mp-img5.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full flex justify-center items-center">
                            <p className="text-lg font-bold">Facial Anti-Manchas</p>
                        </div>
                    </div>
                    <div className="rounded-[10%] overflow-hidden w-64 h-96 relative hover:-translate-y-1 hover:scale-110 duration-200">
                        <img src="Images/Inicio/Mp-img6.jpg" alt="Imagen 3" className="w-full h-full object-cover" />
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full flex justify-center items-center">
                            <p className="text-lg font-bold">Facial Anti-Edad</p>
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

            <div className='flex w-auto lg:h-[50%] h-80 bg-morado drop-shadow-2xl '>
                <div className='relative overflow-hidden lg:w-[100%]'>
                    <img className="h-full" src="Images/Inicio/ins3.jpg" alt="Datos" />
                    <div className="absolute top-0 left-0 w-screen h-full bg-gradient-to-r lg:from-transparent lg:to-violet-500 from-violet-500 to-fuchsia-500 opacity-60 lg:opacity-100 float-right"></div>
                </div>
                <div className='overflow-y-auto lg:w-[50%] pt-3 absolute text-white text-lg justify-center text-justify mr-5 ml-3 right-0 float-right'>
                    <p className='font-bold'>
                        ¡Bienvenido a la Clínica de Belleza Lily!
                    </p>
                    <p className='  '>
                        Donde la excelencia se fusiona con la salud y la belleza, nuestro compromiso es ofrecerte lo mejor en tratamientos tanto corporales como faciales. En nuestra clínica, encontrarás una gama diversa de servicios diseñados para realzar tu bienestar y resaltar tu belleza natural.
                        Nuestra filosofía se basa en la fusión de la experiencia médica y la especialización en estética. Contamos con un equipo de expertos y médicos altamente capacitados, dispuestos a brindarte los tratamientos más avanzados y personalizados para lograr resultados excepcionales.
                    </p>
                </div>


            </div>

            <div className='pt-5'></div>
        </>
    )
}

export default Inicio