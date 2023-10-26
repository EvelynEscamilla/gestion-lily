import Login2 from "./Components/Login/Login2"
import Inicio from "./Components/Inicio/Inicio"
import NosotrosScreen from "./Components/NosotrosScreen/NosotrosScreen"
import MostrarServicios from "./Components/MostrarServicios/MostrarServicios"
import CancelarCita from "./Components/CancelarCita/CancelarCita"
import CrearCuenta from "./Components/CrearCuenta/CrearCuenta"
import Calendario from "./Components/Calendario/Calendario"
import GestionCitas from "./Components/GestionCitas/GestionCitas"
import {useState} from "react"
import HistorialCliente from "./Components/HistorialCliente/HistorialCliente"


function App() {

  const [activeScreen, setActiveScreen] = useState('Inicio')

  const handleScreen = (screen) => {
    setActiveScreen(screen)
  }

  return (
    <>
<HistorialCliente/>
    </>
  )
}

export default App

