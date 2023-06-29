import { Link } from 'react-router-dom'
import Bed2 from './../../assets/images/icons/bed-2.svg'
import Bed from './../../assets/images/icons/bed.svg'
import Office from './../../assets/images/icons/office.svg'
import Outdoor from './../../assets/images/icons/outdoor-cafe.svg'
import Sofa from './../../assets/images/icons/sofa.svg'
import Terrace from './../../assets/images/icons/terrace.svg'
import { AuthCheck, getItem } from '../hook/useCheckAuth'
export default function Navbar(){

    const authCheck = AuthCheck();
    var userName = false;
    console.log(`navbar auth: ${authCheck}`)
    if(authCheck != undefined){
        userName = true
    }

    return (
        <>
            <nav className="bg-gray-800">
                <div className="container flex">
                <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                    <span className="text-white">
                    <i className="fa-solid fa-bars" />
                    </span>
                    <span className="capitalize ml-2 text-white hidden">
                    All Categories
                    </span>
                    {/* dropdown */}
                    <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Sofa}
                        alt="sofa"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Terrace}
                        alt="terrace"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Bed}
                        alt="bed"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Office}
                        alt="office"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Outdoor}
                        alt="outdoor"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                    >
                        <img
                        src={Bed2}
                        alt="Mattress"
                        className="w-5 h-5 object-contain"
                        />
                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </a>
                </div>
                </div>
                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                    <Link
                        to="/"
                        className="text-gray-200 hover:text-white transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        className="text-gray-200 hover:text-white transition"
                    >
                        Shop
                    </Link>
                    <a href="#" className="text-gray-200 hover:text-white transition">
                        About us
                    </a>
                    <Link to="/contact" className="text-gray-200 hover:text-white transition">
                        Contact us
                    </Link>
                    </div>
                    <div className="flex justify-between">
                    {
                        userName ? authCheck ? getItem('token') ? <p className='text-gray-200 hover:text-white transition mr-4'>{getItem('name')}</p> : (
                            <>

                                <Link
                                to="/login"
                                className="text-gray-200 hover:text-white transition mr-4"
                                >
                                Login
                                </Link>
                                <Link
                                to="/register"
                                className="text-gray-200 hover:text-white transition"
                                >
                                Register
                                </Link>
                            </>
                        ) : (
                            <>

                                <Link
                                to="/login"
                                className="text-gray-200 hover:text-white transition mr-4"
                                >
                                Login
                                </Link>
                                <Link
                                to="/register"
                                className="text-gray-200 hover:text-white transition"
                                >
                                Register
                                </Link>
                            </>
                        ) : ''
                    }
                        
                    </div>
                </div>
                </div>
            </nav>
        </>
    )
}