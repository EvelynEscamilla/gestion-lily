
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPrincipal from "./routes/LayoutPrincipal";
import Inicio from "./routes/Inicio";
import Nosotros from "./routes/Nosotros";
import AgregarServicio from "./routes/servicios/AgregarServicio";

import FormCalendar from "./Components/Forms/FormCalendar";
import CancelarCita from "./routes/usuario/CancelarCita";
import CrearCuenta from "./routes/CrearCuenta";
import EditarAdmin from "./routes/administrador/EditarAdmin";
import EditarCliente from "./routes/usuario/EditarCliente";

import EliminarCuenta from "./routes/usuario/EliminarCuenta";
import GestionarServicios from "./routes/servicios/GestionarServicios";
import GestionCitas from "./routes/administrador/GestionCitas";
import HistorialCliente from "./routes/usuario/HistorialCliente";
import HistorialMes from "./routes/administrador/HistorialMes";
import Login2 from "./routes/Login2";
import MostrarServicios from "./routes/servicios/MostrarServicios";
import PerfilCliente from "./routes/usuario/PerfilCliente";
import RecuperarContraseña from './routes/RecuperarContraseña'
import CambiarContraseñaRecuperada from './routes/CambiarContraseñaRecuperada'
import ClientProtectedRoute from "./routes/auth/ClientProtectedRoute";
import AdminProtectedRoute from "./routes/auth/AdminProtectedRoute";
import { AuthProvider } from "./context/authContext";
import Pruebas from "./routes/Pruebas";


function App() {

  const router = createBrowserRouter([
    {
      path: "/gestion-lily",
      element: <LayoutPrincipal />,
      children: [
        {
          path: "/gestion-lily",
          element: <Inicio />,

        },
        {
          path: "/gestion-lily/nosotros",
          element: <Nosotros />,
        },
        {
          path: "/gestion-lily/agregar-servicios",
          element: <AgregarServicio />,
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/calendario",
          element: 
            <FormCalendar />,
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/citas-programadas",
          element: (
            <ClientProtectedRoute>
              <CancelarCita />
            </ClientProtectedRoute>
          ),
        },
        {
          path: "/gestion-lily/crear-cuenta",
          element: <CrearCuenta />,
        },
        {
          path: "/gestion-lily/editar-admin",
          element: (
            <AdminProtectedRoute>
              <EditarAdmin />
            </AdminProtectedRoute>
          ),
        },

        // Estos dos siguientes son casi la misma misma mamada, modificar

        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/editar-datos",
          element: <EditarCliente />,
        },
        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/perfil",
          element: (
            <ClientProtectedRoute>
              <PerfilCliente />
            </ClientProtectedRoute>
          ),
        },

        {
          //Error, volvieron a declarar body dentro del componente
          path: "/gestion-lily/eliminar-cuenta",
          element: <EliminarCuenta />,
        },
        {
          //Col group dentro de thead, solucionar
          path: "/gestion-lily/gestion-servicios",
          element: <AdminProtectedRoute>
            <GestionarServicios />
          </AdminProtectedRoute>,
        },
        {
          //Error en el componente, pasar keys en componentes que se repitan
          path: "/gestion-lily/gestion-citas",
          element: (
            <AdminProtectedRoute>
              <GestionCitas />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/gestion-lily/RecuperarContraseña",
          element: <RecuperarContraseña />
        },
        {
          path: "/gestion-lily/Recuperacion-CambiarContraseña",
          element: <CambiarContraseñaRecuperada />
        },

        {
          path: "/gestion-lily/historial",
          element: (
            <ClientProtectedRoute>
              <HistorialCliente />
            </ClientProtectedRoute>
          ),
        },
        {
          path: "/gestion-lily/historial-mes",
          element: (
            <AdminProtectedRoute>
              <HistorialMes />
            </AdminProtectedRoute>
          ),
        },
        {
          path: "/gestion-lily/login",
          element: <Login2 />,
        },
        {
          path: "/gestion-lily/servicios",
          element: <MostrarServicios />,
        },
        {
          path: "/gestion-lily/pruebas",
          element: <Pruebas />,
        },
      ],
    },
  ]);

  //Rutas normales: inicio, servicios, nosotros, iniciar sesion, crear cuenta
  //Protegidas: ADMIN Y USER
  //ADMIN: Historial mes, gestion citas, editar datos admin, editar servicios, agregar servicios, gestionar servicios, calendario
  //USER: Calendario,perfil cliente, editar datos, eliminar cuenta, historial citas, cancelar citas

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
