import React from 'react'
import { useState } from 'react';
import Boton from '../Components/boton/Boton';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const RecuperarContraseña = () => {
    // Estado para almacenar el valor del input
    const [CorreoE, setValorCorreo] = useState('');



    // Función para manejar cambios en el input
    const handleChangeCorreo = (event) => {
        setValorCorreo(event.target.value);
        console.log(CorreoE)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth,CorreoE).then((data)=>{
            alert("Si el correo existe, recibiras un correo para reestablecer tu contraseña, no olvides revisar la bandeja de SPAM ")
            history("/")
        }).catch(err=>{
            alert(err.code)
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
                </div>
            </div>
        </>
    )
}

export default RecuperarContraseña