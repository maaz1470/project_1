import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { home_url } from "../../../Hooks/useURL";

export default function AllProduct(){
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('/api/get-product').then(response => {
            if(response){
                if(response.data.status === 200){
                    setProductList(response.data.products)
                    setLoading(false)
                }
            }
        })

        return () => setProductList([]);

    },[])

    




    const productDelete = (e,id) => {
        e.preventDefault();

        axios.get(`/api/delete-product/${id}`).then(response => {
            console.log(response)
            if(response.data.status == 200){
                Swal.fire('Success',response.data.message,'success')
                e.target.closest('tr').remove();
                
            }else if(response.data.status == 404){
                Swal.fire('Forbidden',response.data.message,'error')
            }
        })
    }
    
    let html_tr = '';
    var i = 1;
    if(loading){
        return <h1>Loading...</h1>
    }else{

        html_tr = 
        productList.map(el => (
            <tr key={el.id}>
                <th scope="row">{i++}</th>
                <td>{el.name}</td>
                <td>{el.category ? el.category.name : '--'}</td>
                <td>{el.product_image ? <img src={`${home_url}/product/${el.product_image}`} height="50px" alt="" /> : 'No Image'}</td>
                <td>{el.status === 1 ? <span className="btn btn-success">Published</span> : <span className="btn btn-danger">Unpublished</span>}</td>
                <td>
                    <Link to={`edit/${el.id}`} className="btn btn-info"><i className="fas fa-edit    "></i></Link>
                    <a href="" id="ss" onClick={(e) => productDelete(e,el.id)} className="btn btn-danger"><i className="fas fa-trash"></i></a>
                </td>
            </tr>
        ))

    }

    

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">All Products
                            <Link to={'/panel/product/add'} className="btn btn-success float-end">Add Product</Link>
                        </h4>

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Category Name</th>
                                        <th>Product Image</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {html_tr}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}