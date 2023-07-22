import { useNavigate, useParams } from "react-router-dom";
import SingleProduct from "../../inc/Product/SingleProduct";
import Product1 from './../../../assets/images/products/product1.jpg';
import Product2 from './../../../assets/images/products/product2.jpg';
import Product3 from './../../../assets/images/products/product3.jpg';
import Product4 from './../../../assets/images/products/product4.jpg';
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { root } from "../../hook/useFileLocation";
import Loader from "../../inc/Loader";
export default function Category(){
    const {slug} = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`/api/get-category-products/${slug}`).then(response => {
            console.log(response)
            if(response){
                if(response.data.status === 200){
                    setProducts(response.data.products)
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error');
                    navigate('/',{
                        replace: true
                    })
                }
                setLoading(false)
            }
        });
    },[slug])

    if(loading){
        return <Loader />;
    }

    return (
        <>
            <div className="container grid grid-cols-2 gap-6 pt-4 pb-16 items-start">
                {/* sidebar */}
                {/* drawer init and toggle */}
                <div className="text-center md:hidden">
                    <button
                    className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                    type="button"
                    data-drawer-target="drawer-example"
                    data-drawer-show="drawer-example"
                    aria-controls="drawer-example"
                    >
                    <ion-icon name="grid-outline" />
                    </button>
                </div>
                {/* drawer component */}
                {/* ./sidebar */}
                
                {/* products */}
                <div className="col-span-3">
                    <div className="flex items-center mb-4">
                    <select
                        name="sort"
                        id="sort"
                        className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
                    >
                        <option value="">Default sorting</option>
                        <option value="price-low-to-high">Price low to high</option>
                        <option value="price-high-to-low">Price high to low</option>
                        <option value="latest">Latest product</option>
                    </select>
                    <div className="flex gap-2 ml-auto">
                        <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fa-solid fa-grip-vertical" />
                        </div>
                        <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                        <i className="fa-solid fa-list" />
                        </div>
                    </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                        {
                            products.map((el,index) => (
                                <SingleProduct el={el} key={el.id} image={`${root}/product/${el.product_image}`} link={`/product/${el.slug}`} name={el.name} normal_price={`${el.sell_price}$`} price={`${el.price}$`} />
                            ))
                        }
                    </div>
                </div>
                {/* ./products */}
            </div>

        </>
    )
}