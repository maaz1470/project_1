import { Navigate, Outlet } from "react-router-dom";
import { AuthCheck } from "../hook/useCheckAuth";
import { useState } from "react";
import Loader from "../inc/Loader";

export default function ProtectedAdminRoutes(){
    const authCheck = AuthCheck();
    const [loading, setLoading] = useState(true)
    if(authCheck === undefined && loading){
        return <Loader />
    }
    if(authCheck !== undefined){
        if(loading){
            setLoading(false)
        }
        if(authCheck != false){
            return <Outlet />
        }else{
            return <Navigate to={'/login'} />
        }
    }
}