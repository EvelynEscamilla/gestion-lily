
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
import { AuthProvider } from './context/authContext'

function App() {

  // Sugerencias rapidas, 
  //1.- Las rutas se ponen en minusculas, no en mayusculas
  //2.- Hacer carpetas en rutas, para hacer una mejor gestion y se organice mejor el proyecto
  //3.- NO USAR BR NI HR
  //4.- Ya haganlo responsive
  //5.- CARPETAS EN MINUSCULAS TAMBIEN, Componentes empiezan en mayuscula, todo lo otro es con camelCase, rutas en minusculas con guiones separando las palabras
  //6.- No rutas innecesarias, CRUD (servicios) SI CREAR Opciones: MODALS
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
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/calendario",
          element: <Calendario />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/citas-programadas",
          element: <CancelarCita />
        },
        {
          path: "/gestion-lily/crear-cuenta",
          element: <CrearCuenta />
        },
        {
          path: "/gestion-lily/editar-admin",
          element: <EditarAdmin />
        },




        // Estos dos siguientes son casi la misma misma mamada, modificar







        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/editar-datos",
          element: <EditarCliente />
        },
        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/perfil",
          element: <PerfilCliente />
        },
        {
          path: "/gestion-lily/editar-servicios",
          element: <EditarServicio />
        },
        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/eliminar-cuenta",
          element: <EliminarCuenta />
        },
        {
          //Col group dentro de thead, solucionar
          path: "/gestion-lily/gestion-servicios",
          element: <GestionarServicios />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/gestion-citas",
          element: <GestionCitas />
        },



        // Estos dos siguientes son casi la misma misma mamada, modificar




        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/historial",
          element: <HistorialCliente />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/historial-mes",
          element: <HistorialMes />
        },
        {
          path: "/gestion-lily/login",
          element: <Login2 />
        },
        {
          path: "/gestion-lily/servicios",
          element: <MostrarServicios />
        },
      ]
    },
  ])

  //Rutas normales: inicio, servicios, nosotros, iniciar sesion, crear cuenta
  //Protegidas: ADMIN Y USER
  //ADMIN: Historial mes, gestion citas, editar datos admin, editar servicios, agregar servicios, gestionar servicios, calendario
  //USER: Calendario,perfil cliente, editar datos, eliminar cuenta, historial citas, cancelar citas


  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App

