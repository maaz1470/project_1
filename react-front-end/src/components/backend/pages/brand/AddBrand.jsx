import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'toastr/build/toastr.min.css';
import Seo from './../../inc/Seo';

export default function AddBrand(){

    const [brandInfo, setBrandInfo] = useState({
        name: '',
        description: '',
        status: 1,
        meta_title: '',
        meta_keywords: '',
        meta_description: ''
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBrandInfo({
            ...brandInfo,
            [e.target.name]: e.target.value
        })
    }



    const brandSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: brandInfo.name,
            description: brandInfo.description,
            status: brandInfo.status,
            meta_title: brandInfo.meta_title,
            meta_keywords: brandInfo.meta_keywords,
            meta_description: brandInfo.meta_description,
        }

        axios.post('/api/add-brand', data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.success,'success')
                    setBrandInfo({
                        ...brandInfo,
                        name: '',
                        description: '',
                        status: 1,
                        meta_title: '',
                        meta_keywords: '',
                        meta_description: ''
                    })
                }else if(response.data.status === 401){
                    toastr.options.positionClass = 'toast-bottom-right';
                    toastr.options.progressBar = true;
                    toastr.options.debug = false
                    response.data.errors.forEach(el => {
                        toastr.error(el)
                    })
                }
            }
        });

        return () => setBrandInfo({
            ...brandInfo,
            name: '',
            description: '',
            status: 1,
            meta_title: '',
            meta_keywords: '',
            meta_description: ''
        })

    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Brand</h4>
                        <form onSubmit={brandSubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-10">
                                    <input value={brandInfo.name} onChange={handleChange} className="form-control" type="text" id="name" name="name" placeholder="Brand Name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                <div className="col-md-10">
                                    <textarea value={brandInfo.description} onChange={handleChange} className="form-control" name="description" placeholder="Description" id="description" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                <div className="col-md-10">
                                    <select value={brandInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                        <option value="1">Published</option>
                                        <option value="0">Unpublished</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <h4>SEO</h4>
                            <br />
                            <Seo data={brandInfo} changeData={handleChange} />
                            <div className="mb-3 row">
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}