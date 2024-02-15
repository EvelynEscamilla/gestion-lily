import React, { useState } from "react";
import useServicios from "../../hooks/useServicios";
const CitasServicios = ({ onChange }) => {
  const { serviciosPrecioCor, serviciosPrecioFac } = useServicios();
  const servCor = serviciosPrecioCor;
  const servFac = serviciosPrecioFac;
  const [selectedGroup, setSelectedGroup] = useState(null);

  const toggleButtonGroup = (groupId) => {
    setSelectedGroup(selectedGroup === groupId ? null : groupId);
  };

  return (
    <div className="flex flex-col  w-full h-96  ">
      <div className=" w-full p-3  bg-azulNav rounded-lg ">
        <div className="flex w-full">
          <div className="w-1/2 ">
            {" "}
            {/* Espacio entre los grupos de botones */}
            <button
              className=" h-16 w-full border-2 flex justify-center hover:bg-white items-center rounded bg-azul  font-semibold  border-gray-200 hover:duration-150"
              onClick={() => toggleButtonGroup("group1")}
            >
              Servicios Corporales
            </button>
          </div>

          <div className="w-1/2 ">
            <button
              className=" h-16 w-full border-2 flex justify-center hover:bg-white items-center rounded bg-azul  font-semibold  border-gray-200 hover:duration-150"
              onClick={() => toggleButtonGroup("group2")}
            >
              Servicios Faciales
            </button>
          </div>
        </div>
        {selectedGroup === "group2" && (
          <div className="overflow-auto h-72">
            {servFac.map((servicio, index) => (
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
                <label
                  htmlFor={servicio.nombre}
                  className="font-medium w-full  "
                >
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
                      Duracion: {servicio.duracion}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}
        {selectedGroup === "group1" && (
          <div className="overflow-auto h-72">
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
                <label
                  htmlFor={servicio.nombre}
                  className="font-medium w-full  "
                >
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
                      Duracion: {servicio.duracion}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex">
        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem] hidden">
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
                <label
                  htmlFor={servicio.nombre}
                  className="font-medium w-full  "
                >
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
                      Duracion: {servicio.duracion}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 w-1/2">
          <div className="overflow-auto h-[20rem] hidden">
            {servFac.map((servicio, index) => (
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
                <label
                  htmlFor={servicio.nombre}
                  className="font-medium w-full  "
                >
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
                      Duracion: {servicio.duracion}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitasServicios;
