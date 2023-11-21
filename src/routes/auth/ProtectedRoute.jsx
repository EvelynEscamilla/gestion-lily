import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const { user, loading } = useAuth()

    if (loading) return <div>Loading...</div>

    if (!user) return <Navigate to={"/gestion-lily/inicio"}/>


    
    return (children)
}

export default ProtectedRoute