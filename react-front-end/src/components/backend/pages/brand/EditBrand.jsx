import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import Seo from "../../inc/Seo";

export default function EditBrand(){
    const [brandInfo, setBrandInfo] = useState({
        slug: '',
        name: '',
        description: '',
        status: 1,
        meta_title: '',
        meta_keywords: '',
        meta_description: ''
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleChange = (e) => {
        setBrandInfo({
            ...brandInfo,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        
        axios.get(`/api/edit-brand/${id}`).then(response => {

            if(response){
                if(response.data.status === 200){
                    setBrandInfo({
                        ...brandInfo,
                        slug: response.data.brand.slug ?? '',
                        name: response.data.brand.name ?? '',
                        description: response.data.brand.description ?? '',
                        status: response.data.brand.status ?? 1,
                        meta_title: response.data.brand.meta_title ?? '',
                        meta_keywords: response.data.brand.meta_keywords ?? '',
                        meta_description: response.data.brand.meta_description ?? ''
                    })
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error')
                    navigate('/panel/brand',{
                        replace: true
                    })
                }
            }
            setLoading(false)
        })

        return () => setBrandInfo({
            name: '',
            description: '',
            status: 1,
            meta_title: '',
            meta_keywords: '',
            meta_description: ''
        })
    },[])



    

    const updateBrandSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            slug: brandInfo.slug,
            name: brandInfo.name,
            description: brandInfo.description,
            status: brandInfo.status,
            meta_title: brandInfo.meta_title,
            meta_keywords: brandInfo.meta_keywords,
            meta_description: brandInfo.meta_description
        }
        axios.post('/api/update-brand', data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success')
                }else if(response.data.status == 401){
                    toastr.options.positionClass = 'toast-bottom-right';
                    toastr.options.debug = false;
                    toastr.options.progressBar = true;
                    response.data.errors.forEach(el => toastr.error(el))
                }
            }
        }).catch(error => {
            console.log(error)
        });
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Brand</h4>
                        <form onSubmit={updateBrandSubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="slug" className="col-md-2 col-form-label">Slug</label>
                                <div className="col-md-10">
                                    <input value={brandInfo.slug} onChange={handleChange} className="form-control" type="text" id="slug" name="slug" placeholder="Brand slug" />
                                </div>
                            </div>
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