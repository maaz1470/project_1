import axios from "axios";
import { useState } from "react";
import Seo from "../../inc/Seo";
export default function AddPage(){

    const [pageInfo,setPageInfo] = useState({
        title: '',
        page_image: [],
        previewImage: '',
        description: '',
        status: 1,
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });

    const handleChange = (e) => {
        if(e.target.name == 'page_image'){
            setPageInfo({
                ...pageInfo,
                previewImage: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '',
                page_image: e.target.files[0] ?? []
            })
        }else{
            setPageInfo({
                ...pageInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const pageSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title',pageInfo.title)
        data.append('image',pageInfo.page_image)
        data.append('description',pageInfo.description)
        data.append('status',pageInfo.status)
        data.append('meta_title',pageInfo.meta_title)
        data.append('meta_description',pageInfo.meta_description)
        data.append('meta_keywords',pageInfo.meta_keywords)
        axios.post('/api/save-page',data).then(response => {
            console.log(response)
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">All Pages</h4>
                            <form onSubmit={pageSubmit} encType="multipart/form-data">
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-md-2 col-form-label">Name</label>
                                    <div className="col-md-10">
                                        <input value={pageInfo.title} onChange={handleChange} className="form-control" type="text" id="title" name="title" placeholder="Page Name" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-md-2 col-form-label">Description</label>
                                    <div className="col-md-10">
                                        <textarea value={pageInfo.description} onChange={handleChange} className="form-control" id="description" name="description" placeholder="Page Description" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="page_image" className="col-md-2 col-form-label">Page Image</label>
                                    <div className="col-md-10">
                                        <input onChange={handleChange} className="form-control" type="file" id="page_image" name="page_image" />
                                    </div>
                                </div>
                                {
                                    pageInfo.previewImage !== '' ? (<div className="mb-3 row">
                                    <label htmlFor="description" className="col-md-2 col-form-label">Preview</label>
                                    <div className="col-md-10">
                                        <img src={pageInfo.previewImage} alt="" height={100} />
                                    </div>
                                </div>) : ''
                                }
                                
                                <div className="mb-3 row">
                                    <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                    <div className="col-md-10">
                                        <select value={pageInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                            <option value="1">Published</option>
                                            <option value="0">Unpublished</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <br />
                                <h4>SEO</h4>
                                <br />
                                <Seo data={pageInfo} changeData={setPageInfo} />
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
        </>
    )
}