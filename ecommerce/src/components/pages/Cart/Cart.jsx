import { useCart } from 'react-use-cart';
import Product5 from './../../../assets/images/products/product5.jpg';
export default function Whitelist(){
    const {isEmpty,totalUniqueItems,items, cartTotal} = useCart();
    return (
        <>
            <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            {/* sidebar */}
           
            {/* wishlist */}
            <div className="col-span-9 space-y-4">
                {
                    isEmpty ? 'No Product Added to cart' : (
                        items.map(el => (
                            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                                <div className="w-28">
                                    <img
                                    src={Product5}
                                    alt="product 6"
                                    className="w-full"
                                    />
                                </div>
                                <div className="w-1/3">
                                    <h2 className="text-gray-800 text-xl font-medium uppercase">
                                    {el.name}
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                    Availability: <span className="text-green-600">In Stock</span>
                                    </p>
                                </div>
                                <div className="text-primary text-lg font-semibold">{el.price}</div>
                                <a
                                    href="#"
                                    className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                                >
                                    add to cart
                                </a>
                                <div className="text-gray-600 cursor-pointer hover:text-primary">
                                    <i className="fa-solid fa-trash" />
                                </div>
                            </div>
                        ))
                    )
                }
                
            </div>
            <div className="col-span-3 space-y-4">
                <div className="border gap-6 p-4 border-gray-200 rounded">
                    <div className="product">
                        <h3 className='text-gray-700 border-b border-b-gray-400 text-xl'>Product</h3>
                        <div className="product-list mt-5">
                            <div className="flex justify-between pt-3 mb-1">
                                <div className="product_qunatity flex justify-between">
                                    <a href="" className='text-gray-500 font-bold text-sm'>Samsung S21</a>
                                    <span className='text-green-600 ml-3'>×2</span>
                                </div>
                                <div className="price">
                                    <span className='text-gray-500'>200</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-3 mb-1">
                                <div className="product_qunatity flex justify-between">
                                    <a href="" className='text-gray-500 font-bold text-sm'>Samsung S21</a>
                                    <span className='text-green-600 ml-3'>×2</span>
                                </div>
                                <div className="price">
                                    <span className='text-gray-500'>200</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-3 mb-1">
                                <div className="product_qunatity flex justify-between">
                                    <a href="" className='text-gray-500 font-bold text-sm'>Samsung S21</a>
                                    <span className='text-green-600 ml-3'>×2</span>
                                </div>
                                <div className="price">
                                    <span className='text-gray-500'>200</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-3 mb-1">
                                <div className="product_qunatity flex justify-between">
                                    <a href="" className='text-gray-500 font-bold text-sm'>Samsung S21</a>
                                    <span className='text-green-600 ml-3'>×2</span>
                                </div>
                                <div className="price">
                                    <span className='text-gray-500'>200</span>
                                </div>
                            </div>
                            <div className="flex justify-between pt-3 mb-1">
                                <div className="product_qunatity flex justify-between">
                                    <a href="" className='text-gray-500 font-bold text-sm'>Samsung S21</a>
                                    <span className='text-green-600 ml-3'>×2</span>
                                </div>
                                <div className="price">
                                    <span className='text-gray-500'>200</span>
                                </div>
                            </div>
                            <hr className='text-gray-200 mt-3' />
                            <div className="flex justify-between">
                                <p className='text-gray-500 ml-2 text-lg'>Total</p>
                                <span className='text-gray-600 text-xl'>{cartTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ./wishlist */}
            </div>

        </>
    )
}