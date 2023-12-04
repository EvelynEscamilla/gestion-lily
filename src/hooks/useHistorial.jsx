import { useEffect, useState } from 'react'
import { getCitas} from '../controllers/historial.controller'


const useHistorial = () => {

    const [citas, setCitas] = useState([])

    useEffect( () => {
         getCitas().then ((allCitas) => setCitas(allCitas))
    }, [])
    console.log(citas)
    return { citas}
}

export default useHistorial