import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Slider(){
    
    const [slider, setSlider] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axios.get('/api/get-slider').then(response => {
            if(response){
                if(response.data.status === 200){
                    setSlider(response.data.sliders)
                    setLoading(false)
                }
            }
        })


        return () => setSlider([])
    },[])


    const sliderDelete = (e,id) => {
        e.preventDefault();

        axios.get(`/api/slider-delete/${id}`).then(response => {
            if(response){
                if(response.data.status === 200){
                    e.target.closest('tr').remove();
                    Swal.fire('Success',response.data.message,'success');
                }else if(response.data.status === 404){
                    Swal.fire('404',response.data.message,'error');
                }else{
                    Swal.fire('Error','Something went wrong.','error');
                }
            }
        })
    }




    let html_tr = ''
    let i = 1;
    
    if(loading){
        return <h1>Loading...</h1>
    }else{

        html_tr = 
        slider.map(el => {
            return (
                <tr key={el.id}>
                    <th scope="row">{i++}</th>
                    <td>{el.title}</td>
                    <td>something</td>
                    <td>{el.status === 1 ? <span className="btn btn-success">Published</span> : <span className="btn btn-danger">Unpublished</span>}</td>
                    <td>
                        <Link to={`edit/${el.id}`} className="btn btn-info"><i className="fas fa-edit"></i></Link>
                        <a href="" onClick={(e) => sliderDelete(e,el.id)} className="btn btn-danger"><i className="fas fa-trash    "></i></a>
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
                        <h4 className="card-title">All Sliders
                            <Link to={'/panel/slider/add'} className="btn btn-success float-end">Add Categories</Link>
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