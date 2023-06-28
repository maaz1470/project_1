import { Outlet } from "react-router-dom"
import Copywrite from '../inc/Copywrite'
import Footer from '../inc/Footer'
import Header from "../inc/Header"
import Navbar from "../inc/Navbar"
export default function Layout(){
    return (
        <>
            <Header />
            {/* ./header */}
            {/* navbar */}
            <Navbar />
            {/* ./navbar */}
            {/* banner */}
            
            <Outlet />

            {/* ./product */}
            {/* footer */}
            <Footer />
            {/* ./footer */}
            {/* copyright */}
            <Copywrite />
            {/* ./copyright */}
        </>
    )
}