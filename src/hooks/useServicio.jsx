import React, { useEffect, useState } from 'react'
import { getServicio } from '../controllers/servicios.controller'


const useServicio = (id) => {
    const [servicio, setServicio] = useState(null)
    useEffect(() => {
        getServicio(id).then((servicio) => setServicio(servicio))
    }, [])

    return { servicio }

}

export default useServicio