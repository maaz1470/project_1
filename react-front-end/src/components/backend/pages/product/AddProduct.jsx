import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import Seo from "../../inc/Seo";
export default function AddProduct(){
    const [productInfo, setProductInfo] = useState({
        name: '',
        preview_image: '',
        image: [],
        category_name: 0,
        brand_name: 0,
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
    const [categoryList,setCategoryList] = useState([]);
    const [brandList,setBrandList] = useState([]);
    const [loading, setLoading] = useState(true);

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
                [e.target.name]: e.target.value
            })
        }
        

    }

    // console.log(productInfo)


    // Get Category List

    useEffect(() => {
        axios.get('/api/get-product-category').then(response => {
            if(response){
                if(response.data.status === 200){
                    setCategoryList(response.data.categories)
                }
            }
            setLoading(false)
        });

        return () => setCategoryList([])
    },[])

    useEffect(() => {
        axios.get('/api/get-product-brand').then(response => {
            console.log(response)
            if(response){
                if(response.data.status === 200){
                    setBrandList(response.data.brands)
                }
            }
        });

        return () => setBrandList([])
    },[])




    const brandSubmit = (e) => {
        e.preventDefault();
    }


    var htmlCategoryOption = '';
    if(loading){
        return <h1>Loading...</h1>
    }else{
        htmlCategoryOption = 
        
        categoryList.map(el => (
            <option value={el.id} key={el.id}>{el.name}</option>
        ))
    }


    const productSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('name',productInfo.name)
        data.append('productImage',productInfo.image)
        data.append('category_id',productInfo.category_name)
        data.append('brand_id',productInfo.brand_name)
        data.append('status',productInfo.status)
        data.append('product_price',productInfo.product_price)
        data.append('product_sku',productInfo.product_sku)
        data.append('sell_price',productInfo.sell_price)
        data.append('product_quantity',productInfo.product_quantity)
        data.append('product_description',productInfo.product_description)
        data.append('meta_title',productInfo.meta_title)
        data.append('meta_description',productInfo.meta_description)
        data.append('meta_keywords',productInfo.meta_keywords)
        
        axios.post('/api/add-product',data).then(response => {
            console.log(response)
            if(response.data.status === 200){
                Swal.fire('Success',response.data.message,'success')
                setProductInfo({
                    ...productInfo,
                    name: '',
                    image: [],
                    category_name: 0,
                    brand_name: 0,
                    status: 1,
                    product_price: '',
                    product_quantity: '',
                    product_sku: '',
                    sell_price: '',
                    product_description: '',
                    meta_title: '',
                    meta_keywords: '',
                    meta_description: '',
                    preview_image: ''
                })
            }else if(response.data.status === 401){
                toastr.options.positionClass = 'toast-bottom-right'
                toastr.options.progressBar = true;
                toastr.options.debug = false;
                toastr.options.closeButton = true;
                response.data.errors.forEach(el => toastr.error(el))
            }
        })
        
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Product</h4>
                        <form onSubmit={productSubmit} encType="multipart/form-data">
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-10">
                                    <input value={productInfo.name} onChange={handleChange} className="form-control" type="text" id="name" name="name" placeholder="Product Name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Category Name</label>
                                <div className="col-md-10">
                                    <select onChange={handleChange} name="category_name" className="form-control" id="">
                                        <option value="0">Select Option</option>
                                        {categoryList.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-md-2 col-form-label">Brand Name</label>
                                <div className="col-md-10">
                                    <select onChange={handleChange} name="brand_name" className="form-control" id="">
                                        <option value="0">Select Option</option>
                                        {brandList.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
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