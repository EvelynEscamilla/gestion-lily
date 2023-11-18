
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutPrincipal from "./routes/LayoutPrincipal"
import Inicio from "./routes/Inicio"
import Nosotros from "./routes/Nosotros"
import AgregarServicio from './routes/AgregarServicio'
import Calendario from './routes/Calendario'
import CancelarCita from './routes/CancelarCita'
import CrearCuenta from './routes/CrearCuenta'
import EditarAdmin from './routes/EditarAdmin'
import EditarCliente from './routes/EditarCliente'
import EditarServicio from './routes/EditarServicio'
import EliminarCuenta from './routes/EliminarCuenta'
import GestionarServicios from './routes/GestionarServicios'
import GestionCitas from './routes/GestionCitas'
import HistorialCliente from './routes/HistorialCliente'
import HistorialMes from './routes/HistorialMes'
import Login2 from './routes/Login2'
import MostrarServicios from './routes/MostrarServicios'
import PerfilCliente from './routes/PerfilCliente'

function App() {

// Sugerencias rapidas, 
//1.- Las rutas se ponen en minusculas, no en mayusculas
//2.- Hacer carpetas en rutas, para hacer una mejor gestion y se organice mejor el proyecto
//3.- NO USAR BR NI HR
//4.- Ya haganlo responsive

  const router = createBrowserRouter([
    {
      path: "/gestion-lily",
      element: <LayoutPrincipal />,
      children: [
        {
          path: "/gestion-lily",
          element: <Inicio />
        },
        {
          path: "/gestion-lily/nosotros",
          element: <Nosotros />
        },
        {
          path: "/gestion-lily/agregar-servicios",
          element: <AgregarServicio />
        },
        {
          path: "/gestion-lily/Calendario",
          element: <Calendario />
        },
        {
          path: "/gestion-lily/Citas-Programadas",
          element: <CancelarCita />
        },
        {
          path: "/gestion-lily/Crear-Cuenta",
          element: <CrearCuenta />
        },
        {
          path: "/gestion-lily/EditarAdmin",
          element: <EditarAdmin />
        },
        {
          path: "/gestion-lily/Editar-Datos",
          element: <EditarCliente />
        },
        {
          path: "/gestion-lily/Editar-Servicios",
          element: <EditarServicio />
        },
        {
          path: "/gestion-lily/Eliminar-Cuenta",
          element: <EliminarCuenta />
        },
        {
          path: "/gestion-lily/Gestion-Servicios",
          element: <GestionarServicios />
        },
        {
          path: "/gestion-lily/Gestion-Citas",
          element: <GestionCitas />
        },
        {
          path: "/gestion-lily/Historial",
          element: <HistorialCliente />
        },
        {
          path: "/gestion-lily/Historial-Mes",
          element: <HistorialMes />
        },
        {
          path: "/gestion-lily/Login",
          element: <Login2 />
        },
        {
          path: "/gestion-lily/Servicios",
          element: <MostrarServicios />
        },
        {
          path: "/gestion-lily/Perfil",
          element: <PerfilCliente />
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

