import axios from "axios"
import { useEffect, useState } from "react"
import Category from "../inc/Category"
import Feature from "../inc/Feature"
import ProductCategory from "../inc/ProductCategory"
import Slider from "../inc/Slider"
import Loader from "../inc/Loader"
export default function Home(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/api/get-front-categories').then(response => {
            if(response){
                if(response.data.status === 200){
                    setCategories(response.data.categories)
                }else{}
                setLoading(false)
            }
        })
        return () => setCategories([])
    },[])
    return (
        <>
            <Slider />
            {/* ./banner */}
            {/* features */}
            <Feature />
            {/* ./features */}
            {/* categories */}
            <Category data={categories} />
            {/* ./categories */}
            {/* new arrival */}
            {
                loading ? <Loader /> : categories.map(el => {
                    return el.products.length != 0 ? <ProductCategory title={el.name} categoryProduct={el.products} key={el.id} /> : <div key={el.id}></div>
                })
            }
            {/* ./new arrival */}
            {/* ads */}
            {/* <Ads /> */}
            {/* ./ads */}
            {/* product */}
            {/* <ProductCategory title="Electronics" />
            <ProductCategory title="Refrigerator" />
            <ProductCategory title="Air Conditioner" /> */}
        </>
    )
}