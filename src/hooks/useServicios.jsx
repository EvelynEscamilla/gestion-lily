import React, { useEffect, useState } from 'react'
import { getServicios} from '../controllers/servicios.controller'


const useServicios = () => {

    const [servicios, setServicios] = useState([])

    useEffect( () => {
         getServicios().then ((allServicios) => setServicios(allServicios))
    }, [])

    return { servicios}
}

export default useServicios