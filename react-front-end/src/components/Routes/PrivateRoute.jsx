import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useGetUserId from "../Hooks/useGetUserId";

export default function PrivateRoute(){
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const userId = useGetUserId();

    useEffect(() => {
        axios.get('/api/authCheck').then(response => {
            if(response){
                if(response.data.status === 200){
                    setUser(true)
                }
            }
            setLoading(false)
            
        })

        return () => setUser(false)
    },[])

    axios.interceptors.response.use(function(response){
        return response;
    },function(error){
        if(error.response.status === 401){
            Swal.fire('Forbidden',error.response.data.message,'error')
            navigate('/auth/login',{
                replace: true
            })
            console.clear()
        }
        // Promise.reject(error);
    })

    if(loading){
        return <h1>Loading...</h1>
    }else{
        return user ? <Outlet /> : <Navigate to={'/auth/login'} />
    }
    
}