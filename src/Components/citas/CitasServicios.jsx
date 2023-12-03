import React from "react";
import useServicios from "../../hooks/useServicios";
const CitasServicios = ({ onChange }) => {
  const { serviciosPrecioCor, serviciosPrecioFac } = useServicios();
  const servCor = serviciosPrecioCor;
  const servFac = serviciosPrecioFac;

  return (
    <div className="flex items-center lg:flex justify-center w-full">
      <div className=" w-full p-3  bg-azulNav rounded-lg ">
        <div className="flex h-16 text-xl">
          <label className=" w-1/2 border-2 flex justify-center items-center rounded bg-azul  font-semibold  border-azulNav">
            Corporales
          </label>
          <label className="w-1/2 border-2 flex justify-center rounded items-center bg-azul font-semibold  border-azulNav">
            Faciales
          </label>
        </div>
        <div className="flex">
          <div className="mt-2 w-1/2">
            <div className="overflow-auto h-[20rem]">
              {servCor.map((servicio, index) => (
                <div
                  className="flex p-2 items-center ps-4 border border-gray-200 rounded dark:border-gray-700 hover:bg-azulClaro hover:duration-150 mt-2"
                  key={index}
                >
                  <div className="flex items-center h-5">
                    <input
                      id={servicio.nombre}
                      value={servicio.nombre}
                      onChange={onChange}
                      data-precio={servicio.precio}
                      name="grupoServicios"
                      type="radio"
                      className="w-4 h-4"
                    />
                  </div>
                  <label htmlFor={servicio.nombre} className="font-medium w-full  ">
                    <div className="ms-2 block justify-between   ">
                      {servicio.nombre}

                      <p
                        id="helper-radio-text"
                        className="text-xs font-normal text-left"
                      >
                        Precio: {servicio.precio}$
                      </p>
                      
                      <p
                        id="helper-radio-text"
                        className="text-xs font-normal text-left"
                      >
                        Precio: {servicio.precio}$
                      </p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/*                 <div className="flex justify-left ml-6" key={index}>
                  <div className="p-2 text-justify">
                    <input
                      id={servicio.nombre}
                      type="radio"
                      name="grupoServicios"
                      value={servicio.nombre}
                      onChange={onChange}
                    />
                    <label htmlFor={servicio.nombre}>
                      {servicio.nombre}
                    </label>
                  </div>
                </div>*/}
          <div className="mt-2 w-1/2">
            <div className="overflow-auto h-[20rem]">
              {servFac.map((servicio, index) => (
                <div className="flex justify-left ml-6" key={index}>
                  <label className="p-2 text-justify">
                    <input
                      type="radio"
                      name="grupoServicios"
                      value={servicio.nombre}
                      onChange={onChange}
                    />
                    {servicio.nombre}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitasServicios;
