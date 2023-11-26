
const Nosotros = () => {
    return (
      <>
        <div className="InfoComponent m-4 lg:m-24 lg:mt-8 sm:m-8 sm:mt-4">
                    <div className="LabelCont bg-turqueza w-72 h-12 rounded-r-lg text-center pt-1">
                        <label className="text-white text-3xl font-medium ">Quiénes Somos</label>
                    </div>
                    <div className="divInfo w-full h-96 mt-8">
                        <p className="parrafo1 absolute font-semibold mt-6 ml-5 text-lg w-8/12">
                            La clínica de belleza Lily es un negocio dedicado a brindar tratamientos corporales y faciales...
                        </p>
                        <img src="Images/Nosotros/spa1.png" className="info h-full w-full object-cover  rounded-3xl" />
                    </div>
                </div>

                <div className="InfoComponent m-4 lg:m-24 lg:mt-8 sm:m-8 sm:mt-4">
                    <div className="LabelCont bg-turqueza w-72 h-12 rounded-r-lg text-center pt-1">
                        <label className="text-white text-3xl font-medium ">Historia</label>
                    </div>
                    <div className="divInfo w-full h-96 mt-8">
                        <p className="parrafo1 absolute font-semibold mt-6 ml-5 text-lg w-8/12">
                            La clínica de belleza Lily se creó a partir de...
                        </p>
                        <img src="Images/Nosotros/spa2.jpg" className="info h-full w-full object-cover  rounded-3xl" />
                    </div>
                </div>

                <div className="InfoComponent lg:m-24 lg:mt-8 sm:m-8 sm:mt-4">
                    <div className="LabelCont bg-turqueza w-72 h-12 rounded-r-lg text-center pt-1">
                        <label className="text-white text-3xl font-medium ">Instalaciones</label>
                    </div>
                    <div className="divInfo w-full h-full mt-8">
                        
                        <img src="Images/Nosotros/clinica.jpg" className="info h-full w-full object-cover rounded-3xl" />
                        <img src="Images/Nosotros/clinica1.jpg" className="info h-full w-full object-cover mt-8 rounded-3xl" />
                    </div>
                </div>
      </>
    )
    
  }
  
  export default Nosotros