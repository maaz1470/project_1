/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Logo from './../../assets/images/logo.svg';
import { useState } from 'react';
import {root} from './../hook/useFileLocation'
import axios from 'axios';
import { AuthCheck } from '../hook/useCheckAuth';
export default function Header(){
    const [isOpen, setIsOpen] = useState(true)
    const {isEmpty,totalUniqueItems, totalItems, items, cartTotal, removeItem } = useCart();
    const authCheck = AuthCheck();
    console.log(authCheck)
    const customerLogout = (e) => {
        e.preventDefault();
        axios.post('/api/customerLogout').then(response => {
            console.log(response)
        })
    }
    return (
        <>
            <header className="py-4 shadow-sm bg-white">
            <nav className="bg-white py-1.5">
                    <div className="container flex items-center justify-between">
                        <Link to="/" className="lg:hidden">
                            <img src={Logo} className="w-[120px]" alt="" />
                        </Link>
                        <Link className="w-[130px] lg:block hidden" to="/">
                            <img src={Logo} className="w-full object-cover" alt="logo" />
                        </Link>

                        <div className="relative hidden lg:block">
                            <div className="border border-[#FD3D57] rounded-md w-[535px] xl:w-[675px] flex">
                                <div
                                    className="border-r border-primary w-36 bg-white rounded-l-md h-[43px] flex justify-center items-center">
                                    <select className="nice-select nice-select all-category border-transparent focus:border-transparent">
                                        <option defaultValue="All category" defaultChecked>All category</option>
                                        <option defaultValue="Men">Men</option>
                                    </select>
                                </div>

                                <div className="max-w-[250px] xl:max-w-[390px] h-auto flex-grow">
                                    <input type="text" placeholder="Search product..."
                                        className="px-5 py-2.5 border-none text-sm w-full focus:ring-0 focus:outline-none leading-relaxed" />
                                </div>
                                <div className="w-[142px]">
                                    <button
                                        className="bg-primary rounded-r-md w-full px-4 py-2.5 text-white text-base font-medium">Search</button>
                                </div>
                            </div>

                            
                        </div>

                        <div className="flex items-center">
                            <div className="py-2">
                                <a href="wishlist.html" className="relative flex-col items-center">
                                    <span className="text-secondary flex justify-center"><svg width="28" height="28"
                                            viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M128 220.2a13.6 13.6 0 0 1-9.9-4.1L35 133a58 58 0 0 1 2.2-84.2a56.5 56.5 0 0 1 41.6-14a62.8 62.8 0 0 1 40.3 18.3L128 62l11-11a57.9 57.9 0 0 1 84.1 2.2a56.2 56.2 0 0 1 14.1 41.6a62.8 62.8 0 0 1-18.3 40.3l-81 81a13.6 13.6 0 0 1-9.9 4.1Zm5.6-8.3ZM75 46.7a44 44 0 0 0-29.7 11.1a45.8 45.8 0 0 0-1.8 66.7l83.1 83.1a1.9 1.9 0 0 0 2.8 0l81-81c18.2-18.2 19.9-47.5 3.8-65.3a45.8 45.8 0 0 0-66.7-1.8l-15.3 15.2a6.1 6.1 0 0 1-8.5 0l-13.1-13.1A50.3 50.3 0 0 0 75 46.7Z" />
                                        </svg>
                                    </span>
                                    <span className="text-secondary text-[11px] leading-[10px]">Wish List</span>
                                    <span
                                        className="absolute bg-primary -top-1 right-0 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">6</span>
                                </a>
                            </div>

                            <div className="relative group hidden lg:block py-2">
                                <Link to="/cart" className="text-secondary ml-5 relative block text-center">
                                    <span className="text-secondary justify-center"><svg width="28" height="28" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z" />
                                        </svg>
                                    </span>
                                    <span className="text-secondary text-[11px] leading-[10px]">Cart</span>
                                    <span
                                        className="absolute bg-primary -top-1 -right-2 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">{isEmpty ? 0 : totalItems}</span>
                                </Link>

                                <div
                                    className="absolute top-full right-0 bg-white z-20 p-4 w-[300px] rounded-b-[3px] mt-3.5 group-hover:mt-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="mb-3 border-b border-[#d8d8d8]">
                                        <h4 className="text-base text-secondary mb-2">{isEmpty ? 0 : totalUniqueItems} Items</h4>
                                    </div>
                                    <div>
                                        {
                                            isEmpty ? 'No Added Cart Item' : (
                                                items.map(el => (
                                                    <div key={el.id} className="flex items-start pr-5 mb-4 relative">
                                                        <button onClick={() => removeItem(el.id)} className="absolute right-0 text-primary transition duration-300"><svg
                                                                width="18" height="18" viewBox="0 0 32 32">
                                                                <path fill="currentColor"
                                                                    d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
                                                            </svg></button>
                                                        <div className="flex-shrink-0">
                                                            <img src={`${root}/product/${el.product_image}`} className="w-[75px] h-[60px] object-contain"
                                                                alt="product" />
                                                        </div>

                                                        <div className="flex-grow pl-4">
                                                            <h5 className="text-base text-secondary text-primary transition duration-300">
                                                                {el.name}
                                                            </h5>
                                                            <p className="text-[#464545] text-sm">x{el.quantity} <span className="ms-2">${el.quantity * el.price}</span></p>
                                                        </div>
                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-[#d8d8d8] flex justify-between">
                                        <h4 className="text-base text-secondary">SUB TOTAL:</h4>
                                        <h4 className="text-base ml-2">${cartTotal}</h4>
                                    </div>
                                    <div className="flex mt-4 gap-4">
                                        <Link to="/cart"
                                            className="w-1/2 rounded-[3px] py-2 px-2.5 border border-primary bg-primary text-white inline-block text-center text-sm hover:bg-transparent hover:text-primary transition duration-300">VIEW
                                            CART</Link>
                                        <Link to="/customer/checkout"
                                            className="w-1/2 rounded-[3px] py-2 px-2.5 border border-primary hover:bg-primary bg-white hover:text-white inline-block text-center text-sm text-primary transition duration-300">CHECKOUT</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group py-2">
                                <Link to="/customer/profile" className="relative block text-center ml-5">
                                    <span className="text-secondary flex justify-center"><svg width="28" height="28"
                                            viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M230.2 213a118.3 118.3 0 0 0-70.5-54.6a70 70 0 1 0-63.4 0A118.3 118.3 0 0 0 25.8 213a5.9 5.9 0 0 0 2.2 8.2a6 6 0 0 0 8.2-2.2a106 106 0 0 1 183.6 0a6 6 0 0 0 5.2 3a6.4 6.4 0 0 0 3-.8a5.9 5.9 0 0 0 2.2-8.2ZM70 96a58 58 0 1 1 58 58a58 58 0 0 1-58-58Z" />
                                        </svg>
                                    </span>
                                    <span className="text-secondary text-[11px] leading-[10px]">Account</span>
                                </Link>

                                <div
                                    className="absolute top-full right-[1px] bg-white z-20 rounded-b-[3px] py-5 px-[15px] w-[205px] shadow-sm mt-3.5 group-hover:mt-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div>
                                        <p className="text-sm leading-[18px] font-medium mb-4 text-secondary text-center">Welcome to
                                            RAFCART Shop</p>
                                        <div className="flex justify-between">
                                            <a href="#"
                                                className="min-w-[85px] rounded-[3px] py-1 px-[15px] border border-primary bg-primary text-white inline-block text-center text-sm font-medium hover:bg-transparent hover:text-primary transition duration-300">JOIN</a>
                                            <a href="#"
                                                className="min-w-[85px] rounded-[3px] py-1 px-2.5 border border-primary hover:bg-primary bg-white hover:text-white inline-block text-center text-sm font-medium text-primary transition duration-300">Sing
                                                in</a>
                                        </div>
                                    </div>
                                    <div className="pt-2.5">
                                        <a href="my-account.html"
                                            className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200">
                                            <svg className="absolute left-0 top-[1px]" width="22" height="22" viewBox="0 0 32 32">
                                                <path fill="currentColor"
                                                    d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1zm6 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0 0 6 21h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 0 0-2.219-4.156C14.523 16.117 15 15.114 15 14c0-2.2-1.8-4-4-4zm7 1v2h8v-2zm-7 1c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm7 3v2h8v-2zm0 4v2h5v-2z" />
                                            </svg>
                                            My Account
                                        </a>
                                        <a href="order-history.html"
                                            className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200">
                                            <svg className="absolute left-0 top-[1px]" width="21" height="21" viewBox="0 0 32 32">
                                                <path fill="currentColor"
                                                    d="M12 5c-1.645 0-3 1.355-3 3c0 .353.073.684.188 1H4v6h1v13h22V15h1V9h-5.188c.115-.316.188-.647.188-1c0-1.645-1.355-3-3-3c-1.75 0-2.94 1.33-3.72 2.438c-.103.148-.188.292-.28.437c-.092-.145-.177-.29-.28-.438C14.94 6.33 13.75 5 12 5zm0 2c.626 0 1.436.67 2.063 1.563c.152.217.13.23.25.437H12c-.565 0-1-.435-1-1s.435-1 1-1zm8 0c.565 0 1 .435 1 1s-.435 1-1 1h-2.313c.12-.206.098-.22.25-.438C18.564 7.672 19.375 7 20 7zM6 11h20v2h-9v-1h-2v1H6v-2zm1 4h18v11h-8V16h-2v10H7V15z" />
                                            </svg>
                                            My Order
                                        </a>
                                        <a href="wishlist.html"
                                            className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200">
                                            <svg className="absolute left-0 top-[2px]" width="20" height="20" viewBox="0 0 256 256">
                                                <path fill="currentColor"
                                                    d="M128 220.2a13.6 13.6 0 0 1-9.9-4.1L35 133a58 58 0 0 1 2.2-84.2a56.5 56.5 0 0 1 41.6-14a62.8 62.8 0 0 1 40.3 18.3L128 62l11-11a57.9 57.9 0 0 1 84.1 2.2a56.2 56.2 0 0 1 14.1 41.6a62.8 62.8 0 0 1-18.3 40.3l-81 81a13.6 13.6 0 0 1-9.9 4.1Zm5.6-8.3ZM75 46.7a44 44 0 0 0-29.7 11.1a45.8 45.8 0 0 0-1.8 66.7l83.1 83.1a1.9 1.9 0 0 0 2.8 0l81-81c18.2-18.2 19.9-47.5 3.8-65.3a45.8 45.8 0 0 0-66.7-1.8l-15.3 15.2a6.1 6.1 0 0 1-8.5 0l-13.1-13.1A50.3 50.3 0 0 0 75 46.7Z" />
                                            </svg>
                                            My Wishlist
                                        </a>
                                        <a href="login.html"
                                            className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200">
                                            <svg className="absolute left-0 top-[2px]" width="18" height="18" viewBox="0 0 32 32">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                    strokeWidth="2">
                                                    <path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
                                                    <circle cx="25" cy="27" r="2" />
                                                    <circle cx="12" cy="27" r="2" />
                                                </g>
                                            </svg>
                                            My Cart
                                        </a>
                                        <button onClick={customerLogout}
                                            className="flex items-center relative w-full mt-[7px] text-[15px] pl-8 text-[#464545] hover:text-primary transition duration-200">
                                            <svg className="absolute left-0 top-[2px]" width="20" height="20" viewBox="0 0 32 32">
                                                <path fill="currentColor"
                                                    d="M15 4v12h2V4zm-3 .688C7.348 6.34 4 10.785 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.215-3.348-9.66-8-11.313v2.157C23.527 8.39 26 11.91 26 16c0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.09 2.473-7.61 6-9.156z" />
                                            </svg>
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}