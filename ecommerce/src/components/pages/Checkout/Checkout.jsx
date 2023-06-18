import {useCart} from "react-use-cart"

export default function Checkout(){
    const {items} = useCart()
    return (
        <>
            <div className="container grid grid-cols-12 gap-6 pb-14 mt-10">
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <h4 className="bg-[#E9E4E4] px-3 py-2">Billing details</h4>
                    <div>
                        <div className="sm:flex md:block lg:flex gap-6 mt-6">
                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                                <label htmlFor="first_name">First Name <span className="text-primary">*</span></label>
                                <input
                                    className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                    type="text" id="first_name" />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                                <label htmlFor="last_name">Last Name <span className="text-primary">*</span></label>
                                <input
                                    className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                    type="text" id="last_name" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="company_name">Company Name</label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="company_name" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="county_region">County/Region <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="county_region" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="street_addr">Street Address <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="street_addr" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="town_city">Town/City <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="town_city" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="zip_code">Zip Code <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="zip_code" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="phone_number">Phone Number <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="phone_number" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email_addr">Email Address <span className="text-primary">*</span></label>
                            <input className="w-full text-sm border border-[#E9E4E4] rounded focus:ring-0 focus:border-primary mt-2"
                                type="text" id="email_addr" />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <h4 className="bg-[#E9E4E4] px-3 py-2">Your Order</h4>
                    <div className="border border-[#E9E4E4] px-4 py-6 mt-4">
                        <h4 className="uppercase border-b border-[#E9E4E4] pb-2">product</h4>
                        {
                            items.map(el => (
                                <div key={el.id} className="flex justify-between mt-5">
                                    <div className="checkorder_cont">
                                        <h5>{el.name}</h5>
                                        {/* <p>Size: M</p> */}
                                    </div>
                                    <p className="font-semibold">x{el.quantity}</p>
                                    <p className="font-semibold">{el.price * el.quantity}</p>
                                </div>
                            ))
                        }
                        <div className="flex justify-between border-b pb-3 mt-5">
                            <h5 className="font-semibold uppercase">Subtotal</h5>
                            <p className="font-semibold">$140.00</p>
                        </div>
                        <div className="flex justify-between border-b pb-3 mt-5">
                            <h5 className="font-semibold uppercase">Shipping</h5>
                            <p className="font-semibold">Free</p>
                        </div>
                        <div className="flex justify-between border-b pb-3 mt-5">
                            <h5 className="font-semibold uppercase">Total</h5>
                            <p className="font-semibold">$140.00</p>
                        </div>
                        <div className="flex gap-3 items-center mt-4">
                            <input type="checkbox"
                                className="focus:ring-0 text-primary border border-primary focus:bg-primary focus:outline-none"
                                id="save-default" />
                            <label htmlFor="save-default" className="text-sm cursor-pointer">Agree to our <a href="terms-condition.html"
                                    className="text-primary">terms & conditions</a></label>
                        </div>

                        <div className="mt-4">
                            <button className="block w-full px-8 lg:px-2 xl:px-8 py-2 text-center bg-primary hover:bg-transparent text-white hover:text-primary hover:border-primary border transition duration-300 rounded-lg uppercase text-sm">place order</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}