import React from "react";

 const ContendorElementosCal = React.forwardRef(function ContendorElementosCal({ children, titulo, consejos }, ref) {
  return (
    <div>
      <div ref={ref}  className="  flex justify-center items-center py-5 md:py-0 w-full">
        <div className=" py-4 border-2 border-azul rounded-3xl md:flex md:flex-row-reverse md:justify-between bg-azulNav w-full">
          <div className="md:w-5/12 flex flex-col">
            <div className="flex  md:h-1/3 justify-center items-center w-full">
              <p className=" text-4xl p-3 font-bold text-center">{titulo}</p>
            </div>
            <div className="px-10 md:px-0 md:h-2/3 flex w-full">
              <div className=" h-full flex  md:py-10  md:px-10 justify-center items-center w-full lg:text-lg ">
                <div className="  w-full  h-auto  p-3 border-2 rounded-2xl border-azul bg-white  ">
                  <p className=" font-bold"> Recuerda:</p> {consejos}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
})

export default ContendorElementosCal;