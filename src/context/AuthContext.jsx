import React, { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const setToken = (token) => {
        localStorage.setItem("token", token)
    }
    const getToken = () => {
        return localStorage.getItem("token")
    }

    const getUser = async () => {
        try {
            const token = getToken()
            if (token) {
                const loggedUser = await authService.getUser(token)
                setUser(loggedUser)
            }
        } catch (error) {
            console.log("Error =>", error)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = (e) => {
        if (e) e.preventDefault()
        // REMOVEMOS EL TOKEN
        // SETEAMOS EL USUARIO A NULL
        // REDIRECCIÓN AL LOGIN!!!
        console.log("ENTRO AL LOGOUT!!!")
        localStorage.removeItem("token")
        setUser(null)
        navigate("/login")
    }

    const login = async (userData) => {
        // LLAMADA ==> LOGIN ----
        // token... => INFORMACIÓN DEL USUARIO!!! ----
        // GUARDAMOS EL TOKEN ----
        // RECOGEMOS AL USUARIO CON EL TOKEN
        // GUARDAMOS AL USUARIO EN EL ESTADO DE USER
        // REDIRECCIÓN A NUESTRO PERFIL...
        // Y SI LOS DATOS NO SON CORRECTOS...
        try {
            const { token } = await authService.login(userData)
            setToken(token)
            await getUser()
            navigate("/profile")
        } catch (error) {
            console.log("EL ERROR", error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, logout, login, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
