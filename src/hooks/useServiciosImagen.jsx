import React, { useEffect, useState } from 'react'

import { getServicioImages} from '../controllers/servicios.controller'

const useServiciosImagen = () => {

    const [images, setImages] = useState({});

    useEffect(() => {
      const fetchImages = async () => {
        const images = await getServicioImages();
        setImages(images);
      };
      fetchImages();
    }, []);
  
    return (
      
        {images}
      
    );
    }
export default useServiciosImagen