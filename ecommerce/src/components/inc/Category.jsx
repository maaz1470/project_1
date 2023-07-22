/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Category1 from './../../assets/images/category/category-1.jpg'
export default function Category({data}){
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            shop by category
            </h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    data.map(el => (
                        <div className="relative rounded-sm overflow-hidden group" key={el.id}>
                            <img
                            src={Category1}
                            alt="category 1"
                            className="w-full"
                            />
                            <Link
                            to={`/category/${el.slug}`}
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                            >
                            {el.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}