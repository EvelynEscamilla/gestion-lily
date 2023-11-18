import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { createContext, useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { passwordValidation } from '../validations/user.validations'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("No existe el proveedor de autenticacion")
    }
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = async (userData, email, password) => {
        //Ejemplo
        // userData = {
        //     nombreCompleto: "David Gonzalez",
        //     numero: "4433994806"
        // }
        if (passwordValidation(password)) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredentials) => {
                        console.log(userCredentials.user.uid)
                        //La info del uid, hacer la base de datos
                        //Funcion de post user
                    })
            } catch (error) {
                console.log(error)
                throw new Error(error.message)
            }
        }
    }

    const logIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => signOut(auth)

    //Un use Effect se ejecuta cada vez que se detecta un cambio en el valor de los [], retorna una desuscripcion
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return <authContext.Provider value={{ user, loading, logIn, logOut, signUp }}>{children}</authContext.Provider>
}