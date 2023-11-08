import Login2 from "./Components/Login/Login2"
import Inicio from "./Components/Inicio/Inicio"
import NosotrosScreen from "./Components/NosotrosScreen/NosotrosScreen"
import MostrarServicios from "./Components/MostrarServicios/MostrarServicios"
import CancelarCita from "./Components/CancelarCita/CancelarCita"
import CrearCuenta from "./Components/CrearCuenta/CrearCuenta"
import Calendario from "./Components/Calendario/Calendario"
import GestionCitas from "./Components/GestionCitas/GestionCitas"
import EditarAdmin from "./Components/EditarAdmin/EditarAdmin"
import HistorialMes from "./Components/HistorialMes/HistorialMes"
import HistorialCliente from "./Components/HistorialCliente/HistorialCliente"
import PerfilCliente from "./Components/PerfilCliente/PerfilCliente"
import {useState} from "react"



function App() {

  const [activeScreen, setActiveScreen] = useState('Inicio')

  const handleScreen = (screen) => {
    setActiveScreen(screen)
  }

  return (
    <>
    {activeScreen === 'EditarAdmin' && <EditarAdmin handleScreen={handleScreen} />}
    {activeScreen === 'Inicio' && <Inicio handleScreen={handleScreen} />}
    {activeScreen === 'NosotrosScreen' && <NosotrosScreen handleScreen={handleScreen} />}
    {activeScreen === 'MostrarServicios' && <MostrarServicios handleScreen={handleScreen} />}
    {activeScreen === 'CancelarCita' && <CancelarCita handleScreen={handleScreen} />}
    {activeScreen === 'Login2' && <Login2 handleScreen={handleScreen} />}
    {activeScreen === 'CrearCuenta' && <CrearCuenta handleScreen={handleScreen} />}
    {activeScreen === 'Calendario' && <Calendario handleScreen={handleScreen} />}
    {activeScreen === 'HistorialCliente' && <HistorialCliente handleScreen={handleScreen} />}
    {activeScreen === 'GestionCitas' && <GestionCitas handleScreen={handleScreen} />}
    {activeScreen === 'HistorialMes' && <HistorialMes handleScreen={handleScreen} />}
    {activeScreen === 'PerfilCliente' && <PerfilCliente handleScreen={handleScreen} />}

    </>
  )
}

export default App

