import React from 'react'
import Wpr from './Images/Spa-img2.jpg'
import LogoHor from './Images/Lily-hor.png'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="image-container">
                    <img src={Wpr} alt="Descripción de la imagen"></img>
                    <div className="text-overlay">
                        <br></br>
                        <img src={LogoHor} alt="Logo Lily" className="logo"></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="texto-fuente2">
                            <p>
                                Iniciar Sesion
                            </p>
                        </div>
                        <br></br>
                        <br></br>
                        <form>
                            <input className="datos" type="text" placeholder="Correo electronico"></input>
                            <br></br>
                            <br></br>
                            <input className="datos" type="text" placeholder="Contraseña"></input>
                            <br></br>
                            <br></br>
                            <p className="texto-fuente">
                                <a href="">
                                    ¿Has olvidado tu contraseña?
                                </a>
                            </p>
                            <br />
                            <br />
                            <br />
                            <p className="texto-fuente3">
                                <a href="">
                                    Crear cuenta
                                </a>
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
