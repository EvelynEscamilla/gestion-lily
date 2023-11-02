import Login2 from "./Components/Login/Login2"
import Inicio from "./Components/Inicio/Inicio"
import NosotrosScreen from "./Components/NosotrosScreen/NosotrosScreen"
import MostrarServicios from "./Components/MostrarServicios/MostrarServicios"
import CancelarCita from "./Components/CancelarCita/CancelarCita"
import CrearCuenta from "./Components/CrearCuenta/CrearCuenta"
import Calendario from "./Components/Calendario/Calendario"
import GestionCitas from "./Components/GestionCitas/GestionCitas"
import HistorialCliente from "./Components/HistorialCliente/HistorialCliente"
import {useState} from "react"


function App() {

  const [activeScreen, setActiveScreen] = useState('Inicio')

  const handleScreen = (screen) => {
    setActiveScreen(screen)
  }

  return (
    <>

    {activeScreen === 'Inicio' && <Inicio handleScreen={handleScreen} />}
    {activeScreen === 'NosotrosScreen' && <NosotrosScreen handleScreen={handleScreen} />}
    {activeScreen === 'MostrarServicios' && <MostrarServicios handleScreen={handleScreen} />}
    {activeScreen === 'CancelarCita' && <CancelarCita handleScreen={handleScreen} />}
    {activeScreen === 'Login2' && <Login2 handleScreen={handleScreen} />}
    {activeScreen === 'CrearCuenta' && <CrearCuenta handleScreen={handleScreen} />}
    {activeScreen === 'Calendario' && <Calendario handleScreen={handleScreen} />}
    {activeScreen === 'GestionCitas' && <HistorialCliente handleScreen={handleScreen} />}
    </>
  )
}

export default App

