
import NavbarCliente from "../Components/Navbar/NavbarCliente"
import Footer from "../Components/footer/Footer"
import Navbar from "../Components/navbar/Navbar"
import { Outlet } from "react-router-dom"
import { useAuth } from '../context/authContext'

const LayoutPrincipal = () => {

  const { userData, loading } = useAuth()

  if (loading) return<div>Loading...</div>



  return (
    <>
      <Navbar rol = {userData && userData.rol} />
      <div className="w-full min-h-screen bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  )

}

export default LayoutPrincipal