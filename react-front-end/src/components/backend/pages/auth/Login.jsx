import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import useSetUserId from "../../../Hooks/useSetUserId";

export default function Login(props){
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: loginInfo.username,
            password: loginInfo.password
        }
        axios.post('/api/login',data).then(response => {
            console.log(response)
            if(response){

                if(response.data.status === 200){
                    useSetUserId('auth_token',response.data.token)
                    Swal.fire('Success',response.data.message,'success')
                    navigate('/panel',{
                        replace: true
                    })
                }else if(response.data.status === 400){
                    toastr.options.positionClass = 'toast-bottom-right'
                    toastr.options.progressBar = true
                    toastr.options.closeButton = true
                    toastr.options.debug = false
                    response.data.errors.forEach(el => toastr.error(el))
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error')
                }
            }
        }).catch(error => {
            Swal.fire('Error',error.response.data.message,'error');
        })
    }

    return (
        <div>
            <form className="form-horizontal" action="index.html" onSubmit={loginSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input onChange={handleChange} value={loginInfo.username} type="text" className="form-control" id="username" name="username" placeholder="Enter username"/>
                        </div>

                        <div className="mb-4">
                            <label className="form-label" htmlFor="userpassword">Password</label>
                            <input onChange={handleChange} value={loginInfo.password} type="password" className="form-control" name="password" id="userpassword" placeholder="Enter password"/>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="text-md-center mt-3 mt-md-0">
                                    <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock"></i> Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid mt-4">
                            <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}



