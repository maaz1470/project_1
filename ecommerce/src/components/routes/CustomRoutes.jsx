import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { AuthCheck } from "../hook/useCheckAuth";
import axios from "axios";

export default function CustomRoutes(props){
    const {children} = props;
    const [progress, setProgress] = useState(true);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if(location.pathname === prevLoc){
            setPrevLoc('')
        }
    },[location])

    useEffect(() => {
        setProgress(100)
    },[prevLoc])


    axios.interceptors.response.use(function(response){
        return response;
    },function(error){
        return Promise.reject(error)
    })

    const authCheck = AuthCheck();

    return (
        <>
            {progress && <LoadingBar color="#2998ff" progress={progress} onLoaderFinished={() => setProgress(100)} />}
            <Routes>{children}</Routes>
        </>
    )
}