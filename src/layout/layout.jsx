import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

//nuevas
import Footer2 from '../components/Footer/Footer2'
import NavBar2 from '../components/NavBar/NavBar2'
import { AuthProvider } from "../contexts/AuthContext"

const Layout = () => {
    return (
        <>
            <AuthProvider>

                <NavBar2 />
                <Outlet />
                <Footer2 />
            </AuthProvider>
        </>

    )
}

export default Layout
