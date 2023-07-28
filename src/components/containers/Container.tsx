import React from 'react'
import Navbar from '../ui/organisms/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/organisms/Footer'

const Container = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Container