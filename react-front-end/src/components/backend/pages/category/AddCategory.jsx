import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Seo from "../../inc/Seo";

export default function AddCategory(){
    const [categoryInfo, setCategoryInfo] = useState({
        name: '',
        description: '',
        status: 1,
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });


    const handleChange = (e) => {
        setCategoryInfo({
            ...categoryInfo,
            [e.target.name]: e.target.value
        })
    }

    const categorySubmit = (e) => {
        e.preventDefault();

        const data = {
            name: categoryInfo.name,
            description: categoryInfo.description,
            status: categoryInfo.status,
            meta_title: categoryInfo.meta_title,
            meta_description: categoryInfo.meta_description,
            meta_keywords: categoryInfo.meta_keywords
        }

        axios.post('/api/add-category',data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success');
                    setCategoryInfo({
                        ...categoryInfo,
                        name: '',
                        description: '',
                        status: 1,
                        meta_title: '',
                        meta_keywords: '',
                        meta_description: ''
                    })
                }
            }
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Categories</h4>
                        <form onSubmit={categorySubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-10">
                                    <input value={categoryInfo.name} onChange={handleChange} className="form-control" type="text" id="name" name="name" placeholder="Category Name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                <div className="col-md-10">
                                    <textarea value={categoryInfo.description} onChange={handleChange} className="form-control" name="description" placeholder="Description" id="description" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                <div className="col-md-10">
                                    <select value={categoryInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                        <option value="1">Published</option>
                                        <option value="0">Unpublished</option>
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