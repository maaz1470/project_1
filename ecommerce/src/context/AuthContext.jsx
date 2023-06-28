import axios from "axios";
import React, {createContext, useState} from "react";
import { useEffect } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [AuthCheck, setAuthCheck] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/api/authCheck').then(response => {
            if(response){
                if(response.data.status === 200){
                    setAuthCheck(true)
                }else{
                    setAuthCheck(false)
                }
                setLoading(false)
            }
        }).catch(error => {
            setAuthCheck(false)
        })

    },[])
    if(loading){
        return loading;
    }

    return (
        <>
            <AuthContext.Provider value={AuthCheck}>
                {children}
            </AuthContext.Provider>
        </>
    )
}