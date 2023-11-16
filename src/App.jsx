
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutPrincipal from "./routes/LayoutPrincipal"
import Inicio from "./routes/Inicio"
import NosotrosScreen from './Components/NosotrosScreen/NosotrosScreen'

function App() {

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
          element: <NosotrosScreen />
        }
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

