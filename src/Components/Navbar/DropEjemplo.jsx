import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import BtnLink from "../btnLink/BtnLink";
import { Link } from "react-router-dom";
import Boton from "../boton/Boton";

const DropEjemplo = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="">
          <span>Solutions</span>
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 flex w-full p-4 ">
            <div className=" lg:w-1/3 md:w-1/2 w-full bg-green-100 flex flex-col items-center ">
              <Link to={'/gestion-lily/Perfil'}>Perfil</Link>
              <Link to={'/gestion-lily/Citas-Programadas'}>Citas Programadas</Link>
              <Link to={'/gestion-lily/Historial'}>Historial de Citas</Link>
              <Boton>Cerrar Sesion</Boton>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default DropEjemplo;
