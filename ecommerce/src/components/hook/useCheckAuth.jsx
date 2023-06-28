/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const setItem = (name,value) => {
    localStorage.setItem(name,value)
}

export const getItem = (name) => {
    return localStorage.getItem(name);

}



export function AuthCheck(){
    const [authCheck, setAuthCheck] = useState({
        loading: true,
        auth: false
    });
    useEffect(() => {
        const userAuthenticated = async () => {
            await axios.get('/api/authCheck').then(response => {
                if(response.data.status === 200){
                    setAuthCheck({
                        loading: false,
                        auth: true,
                    })
                }else{
                    setAuthCheck({
                        loading: false,
                        auth: false
                    })
                }
                
            }).catch(error => {
                if(error.response){
                    console.log(error)
                }
                setAuthCheck({
                    loading: false,
                    auth: false
                })
            })
        }
        userAuthenticated()
    },[])
    if(authCheck.loading != true){
        return authCheck.auth;
    }

}