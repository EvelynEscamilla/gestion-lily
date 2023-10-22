import React from 'react'
import Wpr from './Images/Spa-img2.jpg'
import LogoHor from './Images/Lily-hor.png'
import './CrearCuenta.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const CrearCuenta = ({handleScreen}) => {
  return (
    <>
    <Navbar handleScreen={handleScreen}/>
     <div className="container">
                <div className="image-container">
                    <img src={Wpr} alt="Descripción de la imagen"></img>
                    <div className="text-overlay">
                        <br></br>
                        <div className='flex justify-center'>
                        <img src={LogoHor} alt="Logo Lily" className="logo"></img>
                        </div>
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
                                <input type="submit" value="Cancelar" className="custom-submit3 bg-morado"/>
                                <input type="submit" value="Crear Cuenta" className="custom-submit2 bg-morado"/>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default CrearCuenta
