import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

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

    return (
        <>
            {progress && <LoadingBar color="#2998ff" progress={progress} onLoaderFinished={() => setProgress(100)} />}
            <Routes>{children}</Routes>
        </>
    )
}