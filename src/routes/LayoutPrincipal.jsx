
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import NavbarAdministrador from "../Components/Navbar/NavbarAdministrador"
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