import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.css';
export default function AddSlider(){
    const [sliderInfo, setSliderInfo] = useState({
        title: '',
        description: '',
        slider_image: [],
        status: 1,
        previewImage: ''
    })

    const handleChange = (e) => {
        if(e.target.name == 'slider_image'){
            setSliderInfo({
                ...sliderInfo,
                previewImage: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '',
                slider_image: e.target.files[0]
            })
        }else{
            setSliderInfo({
                ...sliderInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const sliderSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title',sliderInfo.title)
        data.append('description',sliderInfo.description)
        data.append('status',sliderInfo.status)
        data.append('slider_image',sliderInfo.slider_image)

        axios.post('/api/save-slider',data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success')
                    setSliderInfo({
                        title: '',
                        description: '',
                        status: 1,
                        previewImage: '',
                        slider_image: []
                    })
                }else if(response.data.status === 401){
                    toastr.options.positionClass = 'toast-bottom-right'
                    toastr.options.debug = false;
                    toastr.options.progressBar = true
                    response.data.errors.forEach(el => {
                        toastr.error(el)
                    })
                }
            }
        })

    }

    
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Categories</h4>
                            <form onSubmit={sliderSubmit} encType="multipart/form-data">
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-md-2 col-form-label">Name</label>
                                    <div className="col-md-10">
                                        <input value={sliderInfo.title} onChange={handleChange} className="form-control" type="text" id="title" name="title" placeholder="Category Name" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-md-2 col-form-label">Description</label>
                                    <div className="col-md-10">
                                        <textarea value={sliderInfo.description} onChange={handleChange} className="form-control" id="description" name="description" placeholder="Category Description" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="slider_image" className="col-md-2 col-form-label">Slider Image</label>
                                    <div className="col-md-10">
                                        <input onChange={handleChange} className="form-control" type="file" id="slider_image" name="slider_image" />
                                    </div>
                                </div>
                                {
                                    sliderInfo.previewImage !== '' ? (<div className="mb-3 row">
                                    <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                    <div className="col-md-10">
                                        <img src={sliderInfo.previewImage} alt="" height={100} />
                                    </div>
                                </div>) : ''
                                }
                                
                                <div className="mb-3 row">
                                    <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                    <div className="col-md-10">
                                        <select value={sliderInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                            <option value="1">Published</option>
                                            <option value="0">Unpublished</option>
                                        </select>
                                    </div>
                                    
                                </div>
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