import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Order(){
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryDelete = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        axios.get('/api/orders').then(response => {
            if(response){
                if(response.data.status === 200){
                    setOrders(response.data.orders)
                    console.log(response.data.orders.length)
                }else{
                    Swal.fire('Error','Something went wrong. Please try again.','error')
                }
                setLoading(false)
            }
        }).catch(error => {
            Swal.fire(error.response.statusText,error.response.data.message,'error')
        });
    },[])

    var orderRow = '';
    if(loading){
        return <h1>Loading...</h1>
    }else{
        let i = 1;
        orderRow = orders.map((el,index) => (
            <tr key={index}>
                <th scope="row">{i++}</th>
                <td>{el.customer_name}</td>
                <td>{el.product_name}</td>
                <td>*{el.quantity}</td>
                <td>
                    <Link to={`view/${el.id}`} className="btn btn-info"><i className="fa fa-eye" aria-hidden="true"></i></Link>
                    <a href="" onClick={(e) => categoryDelete(e)} className="btn btn-danger"><i className="fas fa-trash    "></i></a>
                </td>
            </tr>
        ))
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Orders</h4>

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Customer Name</th>
                                        <th>Product Name</th>
                                        <th>Total Order</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    orderRow
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}