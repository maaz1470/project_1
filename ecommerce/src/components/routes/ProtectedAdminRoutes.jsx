import { Navigate, Outlet } from "react-router-dom";
import { AuthCheck } from "../hook/useCheckAuth";
import { useState } from "react";

export default function ProtectedAdminRoutes(){
    const authCheck = AuthCheck();
    if(authCheck !== undefined){
        if(authCheck != false){
            return <Outlet />
        }else{
            return <Navigate to={'/login'} />
        }
    }
}