import React, { useEffect, useState } from 'react'
import { getServicios, getServiciosPrecio } from '../controllers/servicios.controller'

const useServicios = () => {

    const [servicios, setServicios] = useState(null)
    const [serviciosP, setServiciosP] = useState(null)

    useEffect(() => {
        getServicios().then((allServicios) => setServicios(allServicios))
    }, [])

    useEffect(() => {
        getServiciosPrecio().then((allServicios) => setServiciosP(allServicios))
    }, [])

    return { servicios, serviciosP }
}

export default useServicios