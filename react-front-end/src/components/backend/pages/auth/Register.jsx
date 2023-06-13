import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
export default function Register(){
    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
        checkTerms: true
    });

    const navigate = useNavigate();



    const handleTerms = (e) => {
        setRegisterInfo({
            ...registerInfo,
            checkTerms: e.target.checked
        })
    }

    const handleChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value
        })
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.options.debug = false;
        if(!registerInfo.checkTerms){
            return toastr.error('Terms and condition is required.')
        }
        const data = {
            username: registerInfo.username,
            email: registerInfo.email,
            password: registerInfo.password
        }
        axios.post('/api/register',data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success');

                    navigate('/auth/login',{
                        replace: true
                    })
                }else if(response.data.status === 400){
                    response.data.errors.forEach(el => toastr.error(el))
                }
            }
        }).catch(error => {
            Swal.fire('Error',error.response.data.message,'error')
        })
    }



    return (
        <form className="form-horizontal" onSubmit={registerSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input onChange={handleChange} name="username" type="text" className="form-control" id="username" placeholder="Enter username"/>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="useremail">Email</label>
                        <input onChange={handleChange} name="email" type="email" className="form-control" id="useremail" placeholder="Enter email"/>        
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <input onChange={handleChange} name="password" type="password" className="form-control" id="userpassword" placeholder="Enter password"/>
                    </div>
                    <div className="form-check">
                        <input onChange={handleTerms} checked={registerInfo.checkTerms} type="checkbox" className="form-check-input" id="term-conditionCheck"/>
                        <label className="form-check-label fw-normal" htmlFor="term-conditionCheck">I accept <a href="#" className="text-primary">Terms and Conditions</a></label>
                    </div>
                    <div className="d-grid mt-4">
                        <button className="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                    </div>
                </div>
            </div>
        </form>
    )
}