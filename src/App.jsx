
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
import Pruebas from './routes/Pruebas'

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
          path: "/gestion-lily/Calendario",
          element: <Calendario />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
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




        // Estos dos siguientes son casi la misma misma mamada, modificar







        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/Editar-Datos",
          element: <EditarCliente />
        },
        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/Perfil",
          element: <PerfilCliente />
        },
        {
          path: "/gestion-lily/Editar-Servicios",
          element: <EditarServicio />
        },
        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/Eliminar-Cuenta",
          element: <EliminarCuenta />
        },
        {
          //Col group dentro de thead, solucionar
          path: "/gestion-lily/Gestion-Servicios",
          element: <GestionarServicios />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/Gestion-Citas",
          element: <GestionCitas />
        },



        // Estos dos siguientes son casi la misma misma mamada, modificar




        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/Historial",
          element: <HistorialCliente />
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
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
          path: "/gestion-lily/pruebas",
          element: <Pruebas />
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

