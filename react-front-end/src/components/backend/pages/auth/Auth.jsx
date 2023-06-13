import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import LogoDark from './../../../../assets/backend/assets/images/logo-dark.png';
import LogoLight from './../../../../assets/backend/assets/images/logo-light.png';
export default function Auth(){
    const location = useLocation();
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.getItem('auth_token') ? setUserId(true) : setUserId(false)
        setLoading(false)

        return () => setUserId(false)
    },[])
    if(userId){
        navigate('/panel',{
            replace: true
        })
    }

    if(loading){
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <div className="bg-overlay"></div>
            <div className="account-pages my-5 pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="">
                                        <div className="text-center">
                                            <a href="index.html" className="">
                                                <img src={LogoLight} alt="" height="24" className="auth-logo logo-dark mx-auto"/>
                                                <img src={LogoDark} alt="" height="24" className="auth-logo logo-light mx-auto"/>
                                            </a>
                                        </div>
                                        <h4 className="font-size-18 text-muted mt-2 text-center">Welcome Back !</h4>
                                        <p className="mb-5 text-center">Sign in to continue to Upzet.</p>
                                            <Outlet />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <p className="text-white-50">Don't have an account ? {location.pathname == '/auth/login' ? <Link to='/auth/register' className="fw-medium text-primary">Register</Link> : <Link to={'/auth/login'} className="fw-medium text-primary">Login</Link>} </p>
                                <p className="text-white-50">© <script>document.write(new Date().getFullYear())</script> Upzet. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}