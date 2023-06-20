/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.css'
import { setItem } from "../../hook/useCheckAuth";

export default function Login(){

    const [customerData,setCustomerData] = useState({
        email: '',
        password: ''
    })
    const [remember,setRemember] = useState(false)

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        })
    }

    const changeRemember = (e) => {
        if(remember === false){
            setRemember(true)
        }else{
            setRemember(false)
        }
    }
    
    const loginSubmit = (e) => {
        e.preventDefault()
        if((customerData.email && customerData.password) != ''){
            const data = {
                email: customerData.email,
                password: customerData.password,
                remember: remember
            }
            toastr.options.positionClass = 'toast-bottom-right';
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.options.debug = false;
            axios.post('/api/customer-login',data).then(response => {
                if(response){
                    if(response.data.status === 200){
                        setItem('token',response.data.token)
                        setItem('name',response.data.name)
                        Swal.fire('Success',response.data.message,'success')
                        setTimeout(() => {
                            window.location.href = '/'
                        },1000)
                    }else if(response.data.status === 401){
                        response.data.errors.forEach(el => toastr.error(el))
                    }else if(response.data.status === 400){
                        toastr.error(response.data.error)
                    }
                }
            })
        }else{
            Swal.fire('Error','All field is required', 'error')
        }
        
    }

    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">welcome back customer</p>
                <form action="#" method="post" autoComplete="off" onSubmit={loginSubmit}>
                <div className="space-y-2">
                    <div>
                    <label htmlFor="email" className="text-gray-600 mb-2 block">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={customerData.email}
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="youremail.@domain.com"
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="text-gray-600 mb-2 block">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={customerData.password}
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******"
                    />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        onChange={changeRemember}
                        checked={remember}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                        htmlFor="remember"
                        className="text-gray-600 ml-3 cursor-pointer"
                    >
                        Remember me
                    </label>
                    </div>
                    <a href="#" className="text-primary">
                    Forgot password
                    </a>
                </div>
                <div className="mt-4">
                    <button
                    type="submit"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >
                    Login
                    </button>
                </div>
                </form>
                {/* login with */}
                <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                    Or login with
                </div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
                </div>
                <div className="mt-4 flex gap-4">
                <a
                    href="#"
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
                >
                    facebook
                </a>
                <a
                    href="#"
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
                >
                    google
                </a>
                </div>
                {/* ./login with */}
                <p className="mt-4 text-center text-gray-600">
                Don't have account?
                <Link to="/register" className="text-primary">
                    Register now
                </Link>
                </p>
            </div>
        </div>

    )
}