
import Footer from "../Components/footer/Footer"
import Navbar from "../Components/navbar/NavbarCliente"
import { Outlet } from "react-router-dom"

const LayoutPrincipal = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  )

}

export default LayoutPrincipal