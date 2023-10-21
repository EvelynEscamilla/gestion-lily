
import Inicio from "./Components/Inicio/Inicio"
import NosotrosScreen from "./Components/NosotrosScreen/NosotrosScreen"

import GestionarServicios from "./Components/GestionarServicios/GestionarServicios"

import MostrarServicios from "./Components/MostrarServicios/MostrarServicios"
import CancelarCita from "./Components/CancelarCita/CancelarCita"
import {useState} from "react"

function App() {

  const [activeScreen, setActiveScreen] = useState('inicio')

  const handleScreen = (screen) => {
    setActiveScreen(screen)
  }

  return (
    <>

    {activeScreen === 'inicio' && <Inicio handleScreen={handleScreen} />}
    {activeScreen === 'NosotrosScreen' && <NosotrosScreen handleScreen={handleScreen} />}
    {activeScreen === 'MostrarServicios' && <MostrarServicios handleScreen={handleScreen} />}
    {activeScreen === 'CancelarCita' && <CancelarCita handleScreen={handleScreen} />}

    <GestionarServicios></GestionarServicios>

    </>
  )
}

export default App
