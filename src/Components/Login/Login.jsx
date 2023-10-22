import React from 'react'
import Wpr from './Images/Spa-img2.jpg'
import LogoHor from './Images/Lily-hor.png'

const Login = ({handleScreen}) => {
    return (
        <>
            <div className="flex justify-center w-screen ">
                <div className="image-container flex justify-center w-screen">
                    <div >
                    <img className=' w-screen' src={Wpr} alt="Descripción de la imagen"></img>
                    </div>
                    <div className=" absolute text-overlay w-1/3">
                        <br></br>
                        <div className='flex justify-center'>
                        <img src={LogoHor} alt="Logo Lily" className="logo"></img>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="texto-fuente2 text-center">
                            <p>
                                Iniciar Sesión
                            </p>
                        </div>
                        <br></br>
                        <br></br>
                        <form>
                            <input className="datos" type="text" placeholder="Correo electrónico"></input>
                            <br></br>
                            <br></br>
                            <input className="datos" type="text" placeholder="Contraseña"></input>
                            <br></br>
                            <br></br>
                            <p className="texto-fuente text-center">
                                <a href="">
                                    ¿Has olvidado tu contraseña?
                                </a>
                            </p>
                            <br />
                            <br />
                            <br />
                            <p className="texto-fuente3">
                                <button onClick={() => handleScreen("CrearCuenta")}>
                                    Crear cuenta
                                </button>
                                <input type="submit" value="Iniciar Sesion" className="custom-submit2"/>
                            </p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
