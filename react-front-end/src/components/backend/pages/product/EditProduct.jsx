import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Seo from '../../inc/Seo';
export default function EditProduct(){
	const [productInfo, setProductInfo] = useState({
		name: '',
        url: '',
        preview_image: '',
        image: [],
        category_name: 0,
        status: 1,
        product_price: '',
        product_quantity: '',
        product_sku: '',
        sell_price: '',
        product_description: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: ''
	});
	const [loading, setLoading] = useState(true);
	const [categoryList, setCategoryList] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

	useEffect(() => {

        axios.get(`/api/edit-product/${id}`).then(response => {
            if(response.data.status === 200){
                setProductInfo({
                    ...productInfo,
                    name: response.data.product.name ?? '',
                    url: response.data.product.slug ?? '',
                    preview_image: response.data.product.product_image ? `http://127.0.0.1:8000/product/${response.data.product.product_image}` : '',
                    category_name: response.data.product.category_id ?? 0,
                    status: response.data.product.status,
                    product_price: response.data.product.price ?? '',
                    product_quantity: response.data.product.quantity ?? '',
                    product_sku: response.data.product.product_sku ?? '',
                    sell_price: response.data.product.sell_price ?? '',
                    product_description: response.data.product.description ?? '',
                    meta_title: response.data.product.meta_title ?? '',
                    meta_keywords: response.data.product.meta_keywords ?? '',
                    meta_description: response.data.product.meta_description ?? ''
                })
            }else if(response.data.status === 404){
                Swal.fire('404', 'Product Not Found', 'error')
                navigate('/panel/product',{
                    replace: true
                })
            }
            
        })

		axios.get('/api/get-product-category').then(response => {
            if(response){
                if(response.data.status === 200){
                    setCategoryList(response.data.categories)
                }
                setLoading(false)

            }
        });

        


        return () => setCategoryList([])
	},[]);


	const updateProductSubmit = (e) => {
        e.preventDefault();

        var data = new FormData();

        data.append('name',productInfo.name)
        data.append('id',id)
        data.append('slug',productInfo.url)
        data.append('image',productInfo.image)
        data.append('category_id',productInfo.category_name)
        data.append('status',productInfo.status)
        data.append('product_sku',productInfo.product_sku)
        data.append('product_price',productInfo.product_price)
        data.append('product_description',productInfo.product_description)
        data.append('meta_title',productInfo.meta_title)
        data.append('meta_description',productInfo.meta_description)
        data.append('meta_keywords',productInfo.meta_keywords)
        data.append('product_quantity',productInfo.product_quantity)
        data.append('sell_price',productInfo.sell_price)

        axios.post('/api/update-product',data).then(response => {
            console.log(response)
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success')

                }else if(response.data.status === 401){
                    toastr.options.positionClass = 'toast-bottom-right';
                    toastr.options.progressBar = true;
                    toastr.options.closeButton = true;
                    toastr.options.debug = false;
                    response.data.errors.forEach(el => toastr.error(el))
                }else if(response.data.status === 404){
                    Swal.fire('Forbidden',response.data.message,'error')
                }
            }
        })

	}

	const handleChange = (e) => {
        if(e.target.name == 'product_image'){
            setProductInfo({
                ...productInfo,
                preview_image: URL.createObjectURL(e.target.files[0]),
                image: e.target.files[0]
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]:e.target.value
            })
        }
	}

    const removeImage = (e) => {
        e.preventDefault();
        axios.get(`/api/removie-product-image/${id}`).then(response => {
            console.log(response)
            if(response){
                if(response.data.status === 200){
                    Swal.fire('Success',response.data.message,'success');
                    setProductInfo({
                        ...productInfo,
                        preview_image: '',
                        image: []
                    })
                }else if(response.data.status === 404){
                    Swal.fire('Forbidden',response.data.message,'error')
                }
            }
        })
    }

	if(loading){
		return <h1>Loading...</h1>
	}

	return (
		<div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Edit Product</h4>
                        <form onSubmit={updateProductSubmit} encType="multipart/form-data">
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-10">
                                    <input value={productInfo.name} onChange={handleChange} className="form-control" type="text" id="name" name="name" placeholder="Product Name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="slug" className="col-md-2 col-form-label">URL</label>
                                <div className="col-md-10">
                                    <input value={productInfo.url} onChange={handleChange} className="form-control" type="text" id="slug" name="slug" placeholder="Product URL" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Category Name</label>
                                <div className="col-md-10">
                                    <select onChange={handleChange} value={productInfo.category_name} name="category_name" className="form-control" id="">
                                        <option value="0">Select Option</option>
                                        {categoryList.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            
                            <div className="mb-3 row">
                                <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                                <div className="col-md-10">
                                    <select value={productInfo.status} onChange={handleChange} name="status" className="form-control" id="status">
                                        <option value="1">Published</option>
                                        <option value="0">Unpublished</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <h4>Product Information</h4>
                            <div className="mb-3 row">
                                <label htmlFor="product_price" className="col-md-2 col-form-label">Product Price</label>
                                <div className="col-md-10">
                                    <input value={productInfo.product_price} onChange={handleChange} className="form-control" type="number" id="product_price" name="product_price" placeholder="Product Price" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="sell_price" className="col-md-2 col-form-label">Product Sell Price</label>
                                <div className="col-md-10">
                                    <input value={productInfo.sell_price} onChange={handleChange} className="form-control" type="number" id="sell_price" name="sell_price" placeholder="Sell Price" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="product_quantity" className="col-md-2 col-form-label">Product Quantity</label>
                                <div className="col-md-10">
                                    <input value={productInfo.product_quantity} onChange={handleChange} className="form-control" type="number" id="product_quantity" name="product_quantity" placeholder="Product Quantity" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="product_sku" className="col-md-2 col-form-label">Product SKU</label>
                                <div className="col-md-10">
                                    <input value={productInfo.product_sku} onChange={handleChange} className="form-control" type="text" id="product_sku" name="product_sku" placeholder="Product SKU" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="product_description" className="col-md-2 col-form-label">Description</label>
                                <div className="col-md-10">
                                    
                                    {/* <textarea value={productInfo.description} onChange={handleChange} className="form-control" name="description" placeholder="Product Description" id="description" /> */}

                                    <Editor name="product_description" onEditorChange={(newValue, editor) => setProductInfo({...productInfo,product_description: newValue})} initialValue={productInfo.product_description} apiKey="bgyiq0pn24081omv4hbx6vunchg4gjsigwt5hctosdzv4qon" />

                                    {/* <ReactQuill theme="snow" value={productInfo.description} onChange={handleChange} name="description" row="50" /> */}
                                    {/* <CKEditor
                                        editor={ ClassicEditor }
                                        data="<p>Hello from CKEditor 5!</p>"
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    /> */}
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="product_image" className="col-md-2 col-form-label">Product Image</label>
                                <div className="col-md-10">
                                    <input onChange={handleChange} className="form-control" type="file" id="product_image" name="product_image" />
                                    
                                </div>
                                
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="product_image" className="col-md-2 col-form-label">Preview Image</label>
                                <div className="col-md-5">

                                    <img src={productInfo.preview_image} className="rounded" height={200} alt="" />
                                    <br />
                                    <br />
                                    {productInfo.preview_image != '' ? <button className='btn btn-danger' onClick={removeImage}>Remove Image</button> : ''}
                                </div>
                            </div>

                            


                            <br />
                            <h4>SEO</h4>
                            <br />
                            <Seo data={productInfo} changeData={handleChange} />
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