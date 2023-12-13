import React from 'react'
import BotonCalendario from "../boton/BotonCalendario";
import { Dialog, Transition } from "@headlessui/react";

const ModMostrarServicios = ({ isOpen, onClose, title, descripcion, duracion, maxPer, precio }) => {
    return (
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25" />
            </Transition.Child>
  
            {/* This is your modal's actual content */}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title className=" font-bold text-4xl text-center">
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className=" text-left text-gray-500">
                    {descripcion}
                  </p>
                  <p className=" pt-3 text-left text-gray-500">
                    Duracion estimada: {duracion} min
                  </p>
                  <p className=" text-left text-gray-500">
                    Maximo de personas: {maxPer}
                  </p>
                  <p className=" text-left text-gray-500">
                    precio: {precio}$ MXN
                  </p>
                </div>
  
                <div className=" flex justify-center items-center">
                  <BotonCalendario type="button" oC={onClose} desa={true}>
                    Atras
                  </BotonCalendario>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

export default ModMostrarServicios
