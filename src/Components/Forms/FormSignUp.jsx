import React from 'react'
import { useAuth } from '../../context/authContext'
import useForm from '../../hooks/useForm'

const FormSignUp = () => {

    const { signUp } = useAuth()
    const { formData, handleFormDataChange } = useForm()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp("", formData.email, formData.password)
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input onChange={handleFormDataChange} name='email' className=" w-[300px] h-10 bg-azulNav text-center rounded-full mb-4" type="email" placeholder="Correo electrónico"></input>
            <br />
            <input onChange={handleFormDataChange} name='password' className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="password" placeholder="Contraseña"></input>
            <input onChange={handleFormDataChange} name='passwordConfirmation' className="w-[300px] h-10 bg-azulNav text-center  rounded-full mb-4" type="password" placeholder="Confirmar Contraseña"></input>
            <p className="texto-fuente">
                Utiliza mínimo ocho caracteres combinados
            </p>
            <p className="texto-fuente">
                Letras, números y símbolos
            </p>
            <div className="mt-4">
                <input
                    type="submit"
                    value="Cancelar"
                    className="text-[20px] text-white bg-morado m-2 px-4 py-2  rounded-full cursor-pointer float-left"
                ></input>
                <input
                    type="submit"
                    value="Crear Cuenta"
                    className="text-[20px] text-white bg-morado m-2 px-4 py-2 rounded-full cursor-pointer float-right"
                ></input>
            </div>
        </form>
    )
}

export default FormSignUp