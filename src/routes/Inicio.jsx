import React, { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import btnDesplegar from '../assets/Inicio/desplegar.png'
const Inicio = () => {

    const [isShowing, setIsShowing] = useState(false)
    const [infoDiv, setInfoDiv] = useState(1);
    const [showQuestions, setShowQuestions] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
    const [chatState, setChatState] = useState('initial');
    const [responses, setResponses] = useState([]);
    const [response, setResponse] = useState();
    const chatContainerRef = useRef(null);

    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        setIsShowing((isShowing) => true)
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [selectedQuestions, responses]);

    const handleClick = () => {
        setInfoDiv(infoDiv + 1);
        
    }

    const handleClick1 = () => {
        setInfoDiv(infoDiv - 1);
        setSelectedOption('');
        setChatState('initial');
        setResponse('');
    }



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    
        

    const handleSendMessage = () => {
        let newResponse;

        if (selectedOption) {
            const newSelectedQuestion = selectedOption === '1'
                ? '¿Dónde se ubica la clínica?'
                : selectedOption === '2'
                    ? '¿Qué servicios ofrecen?'
                    : selectedOption === '3'
                        ? '¿Qué duración tienen los servicios?'
                        : selectedOption === '4'
                            ? '¿Cuál es el costo de los tratamientos?'
                            : selectedOption === '5'
                                ? '¿Cómo puedo verificar si mi cita fue aceptada?'
                                : selectedOption === '6'
                                    ? '¿Cómo puedo agendar una cita?'
                                    : selectedOption === '7'
                                        ? '¿Puedo cancelar mi cita?'
                                        : selectedOption === '8'
                                            ? '¿Cómo puedo comunicarme con la clínica?'
                                            : '';
    
            setSelectedQuestions((prevQuestions) => [...prevQuestions, newSelectedQuestion]);
        }
    
        switch (selectedOption) {
            case '1':
                newResponse = "La clínica se ubica en Thomas Alva Edison No.335 Col. Electricistas, C.P. 58290";
                break;
            case '2':
                newResponse = 'Ofrecemos servicios como masajes, botox. eliminación de verrugas y tatuajes, bb glow, lipoláser, ácido de labios, entre muchos otros que puedes encontrar en el apartado "Servicios" ubicado en la parte superior en la página.';
                break;
            case '3':
                newResponse = 'La duración de los servicios puede ser desde los 15 minutos, 30 minutos e incluso 1 hora, dependiendo del tratamiento, puedes consultar la duración exacta de cada tratamiento en el apartado "servicios" ubicado en la parte superior de la página.';
                break;
            case '4':
                newResponse = 'El costo depende del tratamiento, puedes consultar el costo exacto de cada tratamiento en el apartado "servicios" ubicado en la parte superior de la página.';
                break;
            case '5':
                newResponse = 'Una vez iniciada sesión en la página, selecciona el icono del perfil ubicado en la parte superior derecha de la página, se desplegará un menú de opciones, selecciona "Citas programadas" y una vez ahí te muestra las citas que tienes agendadas y el estatus en el que se encuentra, ahí te mostrará si tu cita ha sido aceptada, rechazada o cancelada. Recuerda verificar continuamente tus citas.';
                break;
            case '6':
                newResponse = 'Inicia sesión y dirígete al apartado "Citas" ubicado en la parte superior de la página, ahí te mostrará un calendario para que selecciones el día de tu cita, así como la hora y el tratamiento que deseas.';
                break;
            case '7':
                newResponse = 'Sí, para eso selecciona el icono del perfil ubicado en la parte superior derecha de la página, se desplegará un menú de opciones, selecciona "Citas programadas" y una vez ahí te muestra las citas que tienes agendadas, presiona el botón "Cancelar" que se encuentra debajo de los detalles de la cita y tu cita quedará cancelada. Recuerda cancelar tu cita por lo menos 1 día antes de su realización.';
                break;
            case '8':
                newResponse = 'Puedes comunicarte con nosotros a través del número de teléfono: 44 35 87 60 57';
                break;
            default:
                newResponse = 'Lo siento, no entiendo esa pregunta.';
                break;
        }
    
        
        setResponse(newResponse);
        setResponses((prevResponses) => [...prevResponses, newResponse]);
        setChatState('answered');
        setSelectedOption('');
    };
    
    


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
                    <img src={btnDesplegar} alt="desplegar" className='absolute bottom-5 cursor-pointer w-16 hover:scale-110 duration-500' onClick={() => document.getElementById("carouselExampleAutoplaying").scrollIntoView({ behavior: 'smooth' })} />

                </Transition>

            </div>

            <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner max-h-[600px] w-screen items-center justify-center">
                    <div className="carousel-item active">

                        <img src="Images/Inicio/Ca-img9.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover object-left lg:object-cover" alt="Ca 1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img5.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover" alt="Ca 2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img6.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover " alt="Ca 3"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img7.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover" alt="Ca 4"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Inicio/Ca-img8.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover " alt="Ca 5"></img>
                    </div>
                    <div className="carousel-item ">
                        <img src="Images/Inicio/Ca-img4.jpg" className=" md:w-full md:h-auto h-[300px] w-auto object-cover" alt="Ca 6"></img>

                    </div>



                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="bg-blue-100 font-semibold p-4 text-2xl text-center text-black ">
                Tratamientos más populares
            </div>
            <div className="flex justify-center text-center items-center h-full w-full mb-14 mt-14">
                <div className=" justify-center items-center text-center max-w-screen-lg w-full grid grid-rows-3 gap-y-6 lg:grid-cols-3 lg:grid-rows-1 lg:gap-[11%]">
                    <div className="text-center rounded-[10%] overflow-hidden bg-morado h-96 relative hover:-translate-y-1 hover:scale-110 duration-200 w-64">
                        <img src="Images/Inicio/Mp-img4.jpg" alt="Imagen 1" className="w-full h-full object-cover" />
                        <div className="bg-morado bg-opacity-70 text-white text-center p-2 absolute bottom-0 left-0 w-full flex justify-center items-center">
                            <p className="text-lg font-bold">Reduccion de Medidas</p>
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
                    <img className="z-50 fixed bottom-0 rounded-full bg-azulNav border-3 border-morado shadow-lg p-2 right-0 h-24 mx-2 my-4 hover:-translate-y-1 hover:scale-110 duration-200 " src="Images/Inicio/logosolito.svg" alt="Mi Imagen Fija" onClick={() => handleClick()}></img>
                    :
                    <div className="z-50">
                    <img
                        className="fixed bottom-[19rem] rounded-full p-2 right-0 w-12 mx-2 mb-[2rem] hover:-translate-y-1 hover:scale-110 duration-200 bg-azulClaro"
                        src="Images/Inicio/delete-button.png"
                        alt="Mi Imagen Fija"
                        onClick={handleClick1}
                    />
                    <div className="chatScreen fixed bottom-0 right-0 m-2 rounded-xl shadow-2xl border-3 h-[20rem] w-80 bg-azulNav border-morado text-white overflow-hidden">
                        <div className="Preg absolute bottom-0 bg-azulClaro rounded-b-xl w-full h-21 z-10">
                            <p className="lg:w-full bg-turqueza">Preguntas Frecuentes:</p>
                            <div className="flex flex-row pb-2 relative">
                                <select
                                    className="pregFrec bg-turqueza h-12 mt-2 lg:h-12 lg:mt-2 lg:ml-1 selection:bg-morado rounded-2xl p-1 w-full sm:w-48 z-50 origin-top"
                                    onChange={handleOptionChange}
                                >
                                    <option value="1">¿Dónde se ubica la clínica?</option>
                                    <option value="2">¿Qué servicios ofrecen?</option>
                                    <option value="3">¿Qué duración tienen los servicios?</option>
                                    <option value="4">¿Cuál es el costo de los tratamientos?</option>
                                    <option value="5">¿Cómo puedo verificar si mi cita fue aceptada?</option>
                                    <option value="6">¿Cómo puedo agendar una cita?</option>
                                    <option value="7">¿Puedo cancelar mi cita?</option>
                                    <option value="8">¿Cómo puedo comunicarme con la clínica?</option>
                                </select>
                                <button
                                    className="bg-morado hover:bg-[#6f789f] p-3 h-12 mt-2 lg:h-12 lg:mt-2 flex justify-center items-center rounded-2xl text-lg lg:w-full lg:ml-2"
                                    onClick={handleSendMessage}
                                >
                                    Enviar
                                </button>
                            </div>

                        </div>
                        <div className="max-h-[15rem] overflow-y-auto">
                            <ChatMessage text="¡Hola! ¿En qué puedo ayudarte?" isUser={false} />
                            {selectedQuestions.length === responses.length &&
                            selectedQuestions.map((question, index) => (
                                <React.Fragment key={index}>
                                    <QuestionMessage text={question} />
                                    {responses[index] && (
                                        <ChatMessage key={index} text={responses[index]} isUser={false} />
                                    )}
                                </React.Fragment>
                            ))}

                        </div>
                        </div>
                  </div>
                }
            </div>

            <div className='flex w-auto lg:h-[60%] h-[25rem] bg-morado drop-shadow-2xl overflow-hidden mb-5 lg:rounded-none rounded-lg'>
                <div className='relative lg:w-[100%]'>
                    <img className=" h-full w-full object-cover object-bottom" src="Images/Inicio/ins3.jpg" alt="Datos" />
                    <div className="absolute top-0 left-0 w-screen h-full bg-gradient-to-r lg:from-transparent lg:to-violet-500 from-violet-500 to-violet-500 opacity-80 lg:opacity-100 float-right overflow-y-auto">

                        <div className=' lg:w-[50%] pt-3 text-white lg:text-lg text-base justify-center text-justify lg:mr-6 px-2 right-0 float-right'>
                            <p className='font-bold pb-3 lg:pb-0'>
                                ¡Bienvenido a la Clínica de Belleza Lily!
                            </p>
                            <p className='  lg:font-normal lg:text-base'>
                                Donde la excelencia se fusiona con la salud y la belleza, nuestro compromiso es ofrecerte lo mejor en tratamientos tanto corporales como faciales. En nuestra clínica, encontrarás una gama diversa de servicios diseñados para realzar tu bienestar y resaltar tu belleza natural.
                                Nuestra filosofía se basa en la fusión de la experiencia médica y la especialización en estética. Contamos con un equipo de expertos y médicos altamente capacitados, dispuestos a brindarte los tratamientos más avanzados y personalizados para lograr resultados excepcionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

const ChatMessage = ({ text, isUser }) => {
    const messageClass = isUser ? 'bg-turqueza' : 'bg-azulClaro border-turqueza border-1';

    return (
        <div className={`${messageClass} p-1 m-3 font-semibold rounded-lg w-36 selection:bg-morado`}>
            {text}
        </div>
    );
};

  const QuestionMessage = ({ text }) => (
    <div className='flex justify-end'>
    <div className="bg-morado text-white p-1 m-1 font-semibold rounded-lg w-36 selection:bg-morado">
        {text}
    </div>
    </div>
);

export default Inicio