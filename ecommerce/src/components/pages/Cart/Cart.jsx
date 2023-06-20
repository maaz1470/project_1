/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { root } from '../../hook/useFileLocation';
export default function Whitelist(){
    const [cartItem, setCartItem] = useState(1)
    const {isEmpty,totalUniqueItems,items, cartTotal, removeItem, updateItemQuantity} = useCart();
    

    const updateCart = (e,id,incrementOrDecrement,product) => {
        e.preventDefault();
        if(product.quantity){
            if(product.quantity > 1){
                if(incrementOrDecrement == 'nagative'){
                    updateItemQuantity(id,product.quantity - 1)
                }else if(incrementOrDecrement == 'positive'){
                    updateItemQuantity(id,product.quantity + 1)
                }
            }else if(product.quantity == 1){
                if(incrementOrDecrement == 'positive'){
                    updateItemQuantity(id,product.quantity + 1)
                }
            }else if(product.quantity == product.quantity){
                if(incrementOrDecrement == 'nagative'){
                    updateItemQuantity(id,product.quantity - 1)
                }
            }
        }
    }

    const checkOut = (e) => {
        e.preventDefault();

        
    }
    return (
        <>
            <div className="container pb-10 mt-10">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
                <div className="hidden lg:flex justify-between bg-[#E9E4E4] py-2">
                    <p className="pl-44 font-semibold">Product</p>
                    <div className="flex gap-24">
                        <span className="font-semibold">Quantity</span>
                        <span className="pr-24 font-semibold">Total Price</span>
                    </div>
                </div>
                <div className="sm:px-20 md:px-0">
                    {
                        items.map(el => (
                            <div key={el.id} className="border md:flex gap-16 lg:gap-28 justify-between py-4 px-6 mt-6">
                                <div className="md:flex gap-8 items-center">
                                    <div className="max-w-[80px] flex mx-auto">
                                        <img loading="lazy" src={`${root}/product/${el.product_image}`} alt="product" />
                                    </div>
                                    <div className="cart_cont">
                                        <Link to={`/product/${el.slug}`}>
                                            <h5>{el.name}</h5>
                                        </Link>
                                        <p className="text-primary font-medium">{el.price}</p>
                                        {/* <p className="size mb-0">Size: M</p> */}
                                    </div>
                                </div>

                                <div className="flex gap-12 lg:gap-24 items-center">
                                    <div className="flex pl-20">
                                        <div
                                            onClick={(e) => updateCart(e,el.id,'nagative',el)}
                                            className="border w-8 h-8 flex justify-center items-center hover:bg-[#dadada] cursor-pointer">
                                            <svg width="12" height="12" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg>
                                        </div>
                                        <div className="border w-8 h-8 flex justify-center items-center">{el.quantity}</div>
                                        <div
                                            onClick={(e) => updateCart(e,el.id,'positive',el)}
                                            className="border w-8 h-8 flex justify-center items-center hover:bg-[#dadada] cursor-pointer">
                                            <svg width="12" height="12" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex gap-10 lg:gap-16">
                                        <p className="text-primary font-semibold">{el.quantity * el.price}</p>
                                        <div className="hover:text-primary cursor-pointer">
                                            <svg width="20" height="20" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3 border p-4">
                <div>
                    <h4 className="uppercase text-lg">Order Summary</h4>
                    <div className="space-y-2 border-b pb-3 mt-2">
                        <div className="flex justify-between">
                            <p className="font-medium">Subtotal</p>
                            <p className="font-medium">{cartTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium">Delivery</p>
                            <p className="font-medium">Free</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-medium">Tax</p>
                            <p className="font-medium">Free</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="font-semibold">Total</p>
                        <p className="font-semibold">{cartTotal}</p>
                    </div>
                    <div className="flex  w-full lg:max-w-sm rounded-lg overflow-hidden mt-4">
                        <input type="text" placeholder="Enter coupon"
                            className="w-full border border-[#E9E4E4] text-xs focus:outline-none  focus:border-primary overflow-hidden" />
                        <button
                            className="bg-primary border border-primary text-white rounded-br-lg text-xs uppercase px-4 sm:px-8 lg:px-4 hover:bg-white hover:text-primary hover:border-primary transition-all ">apply</button>
                    </div>
                    <div className="mt-8">
                        <Link href="checkout.html"
                            className="block w-full px-8 lg:px-2 xl:px-8 py-2 text-center bg-primary hover:bg-transparent text-white hover:text-primary hover:border-primary border transition duration-300 rounded-lg uppercase text-sm">Proccees
                            to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}