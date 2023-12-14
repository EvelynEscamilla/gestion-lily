import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { createContext, useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { passwordValidation } from '../validations/user.validations'
import { postUser, getUser } from '../controllers/user.controller'

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
    const [userData, setUserData] = useState(null)

    const signUp = async (userData, email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredentials) => {
                    await postUser({ ...userData, rol: "cliente" }, userCredentials.user.uid)
                })
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    const logIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => signOut(auth)

    //Un use Effect se ejecuta cada vez que se detecta un cambio en el valor de los [], retorna una desuscripcion
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                setUserData(await getUser(currentUser.uid))
            } else { 
                setUser(null)
            }
            setLoading(false)
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return <authContext.Provider value={{ user, loading, logIn, logOut, signUp, userData }}>{children}</authContext.Provider>
}