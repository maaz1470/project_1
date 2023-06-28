import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
 export default function Content({children}){
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>
            

            

            <Footer />
        </div>
    )
 }