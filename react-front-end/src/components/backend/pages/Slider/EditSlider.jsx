import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.css';
import { home_url } from "../../../Hooks/useURL";

export default function EditSlider(){

    const [sliderInfo, setSliderInfo] = useState({
        title: '',
        description: '',
        slider_image: [],
        status: 1,
        previewImage: '',
        defaultPreviewImge: ''
    });

    const [loading, setLoading] = useState(true)

    const {id} = useParams();

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

    useEffect(() => {
        axios.get(`/api/edit-slider/${id}`).then(response => {
            setSliderInfo({
                ...sliderInfo,
                title: response.data.sliders.title ?? '',
                description: response.data.sliders.description ?? '',
                status: response.data.sliders.status ?? 1,
                defaultPreviewImge: response.data.sliders.slider_image ?? ''
            })

            setLoading(false)

        })

        return () => setSliderInfo([])


    },[])

    const sliderSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title',sliderInfo.title)
        data.append('id',id)
        data.append('description',sliderInfo.description)
        data.append('status',sliderInfo.status)
        data.append('slider_image',sliderInfo.slider_image)

        axios.post('/api/update-slider',data).then(response => {
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success')
                }else if(response.data.status === 404){
                    Swal.fire('404',response.data.message,'error')
                }else if(response.data.status === 401){
                    toastr.options.positionClass = 'toast-bottom-right'
                    toastr.options.progressBar = true;
                    toastr.options.debug = false;
                    toastr.options.closeButton = true;
                    response.data.errors.forEach(el => {
                        toastr.error(el)
                    })
                }else{
                    Swal.fire('Error','Something went wrong.','error')
                }
            }
        });
    }

    if(loading){
        return <h1>Loading...</h1>
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
                                    sliderInfo.previewImage == '' ? (
                                    <div className="mb-3 row">
                                        <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                        <div className="col-md-10">
                                            <img src={home_url + '/slider/' + sliderInfo.defaultPreviewImge} alt="" height={100} />
                                        </div>
                                    </div>) : (
                                        <div className="mb-3 row">
                                            <label htmlFor="description" className="col-md-2 col-form-label">Description</label>
                                            <div className="col-md-10">
                                                <img src={sliderInfo.previewImage} alt="" height={100} />
                                            </div>
                                        </div>
                                    )
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