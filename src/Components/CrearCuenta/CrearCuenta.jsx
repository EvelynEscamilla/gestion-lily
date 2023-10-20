import React from 'react'
import Wpr from './Images/Spa-img2.jpg'
import LogoHor from './Images/Lily-hor.png'
import './Components/CrearCuenta/CrearCuenta.css'

const CrearCuenta = () => {
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
                            Crea una cuenta en nuestro sitio
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
                            <input className="datos" type="text" placeholder="Confirmar Contraseña"></input>
                            <br />
                            <br />
                            <p className="texto-fuente">
                            Utiliza minimo ocho caracteres combinados
                            </p>
                            <p className="texto-fuente">
                            Letras, números y símbolos
                            </p>
                            <br />
                            <br />
                            <br />
                            <p className="texto-fuente3">
                                <input type="submit" value="Cancelar" className="custom-submit3"/>
                                <input type="submit" value="Crear Cuenta" className="custom-submit2"/>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CrearCuenta
