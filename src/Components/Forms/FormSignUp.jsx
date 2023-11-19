import React from 'react'
import { useAuth } from '../../context/authContext'
import useForm from '../../hooks/useForm'

const FormSignUp = () => {

    const { signUp } = useAuth()
    const { formData, handleFormDataChange } = useForm()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            nombreCompleto: formData.nombreCompleto,
            telefono: formData.telefono,
            email: formData.email
        }
        await signUp(userData, formData.email, formData.password)
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input onChange={handleFormDataChange} name='nombreCompleto' className=" w-[300px] h-10 bg-azulNav text-center rounded-full mb-4" type="text" placeholder="Nombre completo" />
            <input onChange={handleFormDataChange} name='telefono' className=" w-[300px] h-10 bg-azulNav text-center rounded-full mb-4" type="tel" placeholder="Numero de celular" />
            <input onChange={handleFormDataChange} name='email' className=" w-[300px] h-10 bg-azulNav text-center rounded-full mb-4" type="email" placeholder="Correo electrónico" />
            <input onChange={handleFormDataChange} name='password' className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="password" placeholder="Contraseña" />
            <input onChange={handleFormDataChange} name='passwordConfirmation' className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="password" placeholder="Confirmar Contraseña"></input>
            <p className="texto-fuente">
                Utiliza mínimo ocho caracteres combinados
            </p>
            <p className="texto-fuente">
                Letras, números y símbolos
            </p>
            <div className="mt-4">
                <button type="submit" className="text-[20px] text-white bg-morado m-2 px-4 py-2  rounded-full cursor-pointer float-left">Cancelar</button>
                <button type="submit" className="text-[20px] text-white bg-morado m-2 px-4 py-2 rounded-full cursor-pointer float-right">Crear cuenta</button>
            </div>
        </form>
    )
}

export default FormSignUp