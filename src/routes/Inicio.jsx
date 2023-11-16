
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const PagInicio = () => {
    return (
      <>
        <Navbar />
        <div className="w-full h-screen bg-white">
        <Outlet />

        </div>
        <Footer />
      </>
    )
    
  }
  
  export default PagInicio