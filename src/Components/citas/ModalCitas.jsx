import React from "react";
import { Transition } from "@headlessui/react";

const ModalCitas = ({ texto }) => {
  return (
    <>
      <div className="p-2 sm:flex  justify-center items-center">
        <p className="border-2 p-3 flex rounded-3xl bg-white border-azul font-semibold sm:w-2/3">
          {texto}
        </p>
      </div>
    </>
  );
};

export default ModalCitas;
