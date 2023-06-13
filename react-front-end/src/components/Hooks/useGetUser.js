import axios from "axios";
import { useEffect, useState } from "react";

function useGetUser(){
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get('/api/checkAuthentication').then(res => {
            
        })
    },[])
}