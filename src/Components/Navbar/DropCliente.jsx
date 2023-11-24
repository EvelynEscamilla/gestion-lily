import { useState, Fragment } from "react";
import LinkNavbar from "./LinkNavbar";
import BtnLogOut from "./BtnLogOut";
import { Popover, Transition } from "@headlessui/react";

function DropCliente() {
  return (
    <>
      <Popover>
        <Popover.Button className="relative flex justify-end  duration-150 z-10">
          {<img className="Logoi1  h-20  " src="Images/Nav/login.png" />}
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
          <Popover.Group>
            <div className=" absolute  top-full right-0    w-[200px] bg-white shadow-md mt-1 rounded transition flex flex-col items-center z-20">
              <LinkNavbar direccion={"/gestion-lily/Perfil"}>Perfil</LinkNavbar>
              <LinkNavbar direccion={"/gestion-lily/Citas-Programadas"}>
                Citas Programadas
              </LinkNavbar>
              <LinkNavbar direccion={"/gestion-lily/Historial"}>
                Historial de Citas
              </LinkNavbar>

              <BtnLogOut />
            </div>
          </Popover.Group>
        </Transition>
      </Popover>
    </>
  );
}

export default DropCliente;
