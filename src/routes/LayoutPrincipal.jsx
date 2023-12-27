import NavbarCliente from "../Components/Navbar/NavbarCliente";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import ScrollToTop from "../hooks/ScrollToTop";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";
const LayoutPrincipal = () => {
  const { userData, loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Navbar rol={userData && userData.rol} />
      <div className="w-full min-h-screen bg-white">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutPrincipal;
