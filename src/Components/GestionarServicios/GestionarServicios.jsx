import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const GestionarServicios = () => {
  return (
    <>
      <Navbar />
      <div className=" w-screen flex justify-between">
        <div className=" w-1/2">
          <div className=" p-3 ">
            <button className=" shadow-md rounded-3xl border border-black">
              <div className="  flex p-3 justify-center items-center">
                <p className=" text-2xl px-2">+</p>
                <p>Agregar Servicio</p>
              </div>
            </button>
          </div>
        </div>
        <div className=" w-1/2">2</div>
      </div>
      <Footer />
    </>
  );
};

export default GestionarServicios;
