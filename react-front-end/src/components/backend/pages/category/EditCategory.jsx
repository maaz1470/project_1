import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import Seo from "../../inc/Seo";
export default function EditCategory(){

    const [categoryInfo, setCategoryInfo] = useState({
        name: '',
        slug: '',
        description: '',
        status: 0,
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });

    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    

    useEffect(() => {
        axios.get(`/api/edit-category/${id}`).then(response => {
            if(response){
                if(response.data.status === 200){
                    setCategoryInfo({
                        ...categoryInfo,
                        name: response.data.category.name,
                        slug: response.data.category.slug,
                        description: response.data.category.description,
                        status: response.data.category.status,
                        meta_title: response.data.category.meta_title,
                        meta_description: response.data.category.meta_description,
                        meta_keywords: response.data.category.meta_keywords
                    })
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error')
                    navigate('/panel/category',{
                        replace: true
                    })
                }
            }
            setLoading(false)
        })
    return () => setCategoryInfo({
        name: '',
        slug: '',
        description: '',
        status: 0,
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    })
    },[]);


    const handleChange = (e) => {
        setCategoryInfo({
            ...categoryInfo,
            [e.target.name]: e.target.defaultValue
        })
    }


    

    const updateCategorySubmit = (e) => {
        e.preventDefault();

        const data = {
            id: id,
            name: categoryInfo.name,
            slug: categoryInfo.slug,
            description: categoryInfo.description,
            status: categoryInfo.status,
            meta_title: categoryInfo.meta_title,
            meta_description: categoryInfo.meta_description,
            meta_keywords: categoryInfo.meta_keywords
        }

        axios.post('/api/update-category',data).then(response => {
            console.log(response)
            if(response.data.status === 200){
                Swal.fire('Success',response.data.message,'success');
            }else if(response.data.status === 401){
                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.progressBar = true;
                toastr.options.debug = false;
                
                response.data.errors.forEach(el => toastr.error(el))
            }
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
                        <h4 className="card-title">Categories</h4>
                        <form onSubmit={updateCategorySubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">URL</label>
                                <div className="col-md-10">
                                    <input defaultValue={categoryInfo.slug} onChange={handleChange} className="form-control" type="text" id="slug" name="slug" placeholder="Category URL" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-10">
                                    <input defaultValue={categoryInfo.name} onChange={handleChange} className="form-control" type="text" id="name" name="name" placeholder="Category Name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                <div className="col-md-10">
                                    <textarea defaultValue={categoryInfo.description} onChange={handleChange} className="form-control" name="description" placeholder="Description" id="description" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                <div className="col-md-10">
                                    <select defaultValue={categoryInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                        <option defaultValue="1">Published</option>
                                        <option defaultValue="0">Unpublished</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <h4>SEO</h4>
                            <br />
                            <Seo data={categoryInfo} changeData={handleChange} />
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