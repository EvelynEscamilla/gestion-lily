
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PagInicio from "./routes/Inicio"
import Nosotros from './routes/Nosotros'

function App() {

  const router = createBrowserRouter([
    {
      path: "/gestion-lily/",
      element: <PagInicio />
    },
    {
      path: "/gestion-lily/Nosotros",
      element: <Nosotros />
    }
  ])

  return (
    <>
      <RouterProvider router={router } />
    </>
  )
}

export default App

