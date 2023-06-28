import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function AllBrands(){
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/get-brands').then(response => {
            console.log(response)
            if(response){
                if(response.data.status === 200){
                    setBrands(response.data.brands)
                }
            }
            setLoading(false)
        })
        return () => setBrands([])
    },[])

    const brandDelete = (e, id) => {
        e.preventDefault();
        e.target.textContent = 'Deleting'
        axios.get(`/api/delete-brand/${id}`).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success')
                    e.target.closest('tr').remove();
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error')
                    navigate('/panel/brand',{
                        replace: true
                    })
                }
            }
        });
    }

    var brandHtml = '';

    if(loading){
        return <h1>Loading...</h1>
    }else{
        let i = 1;
        brandHtml = 
        brands.map(el => {
            return (
                <tr key={el.id}>
                    <th scope="row">{i++}</th>
                    <td>{el.name}</td>
                    <td>{el.slug}</td>
                    <td>{el.status === 1 ? <span className="btn btn-success">Published</span> : <span className="btn btn-danger">Unpublished</span>}</td>
                    <td>
                        <Link to={`edit/${el.id}`} className="btn btn-info"><i className="fas fa-edit    "></i></Link>
                        <a href="" onClick={(e) => brandDelete(e,el.id)} className="btn btn-danger"><i className="fas fa-trash    "></i></a>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">All Brands
                            <Link to={'/panel/brand/add'} className="btn btn-success float-end">Add Brand</Link>
                        </h4>

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>URL</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {brandHtml}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}