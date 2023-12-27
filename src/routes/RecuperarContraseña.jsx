import React from 'react'
import { useState } from 'react';
import Boton from '../Components/boton/Boton';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import ModalRecuperacionPassw from '../Components/modals/ModalRecuperacionPassw';

const RecuperarContraseña = () => {
    // Estado para almacenar el valor del input
    const [CorreoE, setValorCorreo] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Función para manejar cambios en el input
    const handleChangeCorreo = (event) => {
        setValorCorreo(event.target.value);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(true);
        sendPasswordResetEmail(auth, CorreoE).then(() => {
            history("/")
        }).catch(err => {
            
        })

    }
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
                    <form onSubmit={handleSubmit}>
                        <div className='items-center justify-center text-center'>
                            <p className='text-xl py-3'>Introduce el correo electronico con el que registrate tu cuenta</p>
                            <input
                                className="md:w-1/2 w-3/4  text-black h-10 bg-azulNav text-center  rounded-full mb-4"
                                type="email"
                                placeholder='Correo Electronico'
                                onChange={handleChangeCorreo}
                                value={CorreoE}
                            ></input>
                        </div>
                        <div className='text-center items-center justify-center'>
                            <Boton type="submit" BG="morado" TC="white">
                                Enviar correo de recuperacion
                            </Boton>
                        </div>
                    </form>
                    {/* Modal */}
                    {showModal && (
                        <ModalRecuperacionPassw onClose={closeModal}>
                            {/* Contenido del modal, por ejemplo un mensaje de éxito */}
                        </ModalRecuperacionPassw>
                    )}
                </div>
            </div>
        </>
    )
}

export default RecuperarContraseña