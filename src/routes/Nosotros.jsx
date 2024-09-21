// 1. Flyweight 
class Flyweight {
  render(image, description) {
    throw new Error("Método render() debe ser implementado");
  }
}

// 2. ConcreteFlyweight 
class ConcreteFlyweight extends Flyweight {
  constructor(style) {
    super();
    this.style = style; 
  }

  render(image, description) {
    return (
      <div
        className="relative h-96 flex flex-col justify-end items-center w-full"
        style={{
          ...this.style,
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-morado "></div>
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 relative z-10">
          <p className="text-white p-4 text-5xl font-bold ">{description}</p>
        </div>
      </div>
    );
  }
}

// 3. FlyweightFactory 
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(style) {
    const key = JSON.stringify(style);
    if (!this.flyweights[key]) {
      this.flyweights[key] = new ConcreteFlyweight(style);
    }
    return this.flyweights[key];
  }
}

// 4. Client 
const Nosotros = () => {
  const imagenes = [
    "Images/Nosotros/ins1.jpg",
    "Images/Nosotros/ins2.jpg",
    "Images/Nosotros/ins3.jpg",
    "Images/Nosotros/ins13.jpg",
    "Images/Nosotros/ins4.jpg",
    "Images/Nosotros/ins5.jpg",
    "Images/Nosotros/ins6.jpg",
    "Images/Nosotros/ins7.jpg",
    "Images/Nosotros/ins8.jpg",
    "Images/Nosotros/ins9.jpg",
    "Images/Nosotros/ins10.jpg",
    "Images/Nosotros/ins12.jpg",
    "Images/Nosotros/ins14.jpg",
    "Images/Nosotros/ins15.jpg",
    "Images/Nosotros/ins16.jpg",
    "Images/Nosotros/ins17.jpg",
    "Images/Nosotros/ins18.jpg",
  ];

  const factory = new FlyweightFactory();

  
  const sectionStyle1 = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const sectionStyle2 = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const flyweight1 = factory.getFlyweight(sectionStyle1);
  const flyweight2 = factory.getFlyweight(sectionStyle2);

  return (
    <>
      <div className=" pb-28 flex flex-col  items-center">
        {flyweight1.render("Images/Nosotros/spa1.jpg", "Sobre nosotros")}
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <p className="p-4 text-xl">
            <p className="text-4xl font-bold py-4">Tu Destino para la Belleza</p>
            Descubre la Clínica de Belleza Lily, tu destino para tratamientos
            faciales y corporales personalizados. Con expertos dedicados, te
            ofrecemos una experiencia única para resaltar tu belleza natural.
            Desde faciales revitalizantes hasta procedimientos corporales
            especializados, estamos aquí para ayudarte a lograr tu mejor
            versión. ¡Bienvenido a un mundo de cuidado estético excepcional!
          </p>
        </div>
      </div>

      <div className=" pb-28 flex flex-col  items-center">
        {flyweight2.render("Images/Nosotros/spaa2.jpg", "Historia")}
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <p className="py-8 px-4 text-xl">
            La clínica de belleza Lily se creó a partir de un laboratorio de
            análisis clínicos propiedad de la Licenciada y Cosmiatra Lilia Ramos
            S. Con el tiempo, fue añadiendo servicios más enfocados en la belleza
            como mesoterapia, cosmetología, entre muchos otros, hasta convertirse
            en el sitio que es hoy.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold py-4">Conoce nuestras Instalaciones</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          {imagenes.map((imagen, index) => (
            <div key={index} className="p-6">
              <img
                src={imagen}
                className="info w-full object-cover rounded-3xl hover:scale-105 duration-500 aspect-square"
                alt={`Imagen ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nosotros;
