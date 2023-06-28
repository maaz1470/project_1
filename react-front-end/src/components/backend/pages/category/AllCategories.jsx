import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AllCategories(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/all-categories').then(response => {
            if(response){
                if(response.data.status === 200){
                    setCategories(response.data.categories)
                }
            }

            setLoading(false)
        })

        return () => setCategories([])
    },[])


    const categoryDelete = (e, id) => {
        e.preventDefault();
        e.target.textContent = 'Deleting'
        axios.post(`/api/delete-category/${id}`).then(response => {
            if(response){
                if(response.data.status === 200){
                    e.target.textContent = 'Deleted'
                    e.target.closest('tr').remove()
                }else if(response.data.status === 404){
                    Swal.fire('Error',response.data.message,'error')
                }
            }
        }).catch(error => {
            console.log(error)
        });
    }


    let category_view = '';
    if(loading){
        return <h1>Loading...</h1>
    }else{
        let i = 1;
        category_view = 
        categories.map((el) => {
            return (
                <tr key={el.id}>
                    <th scope="row">{i++}</th>
                    <td>{el.name}</td>
                    <td>https://homeurl.com/{el.slug}</td>
                    <td>{el.status === 1 ? <span className="btn btn-success">Published</span> : <span className="btn btn-danger">Unpublished</span>}</td>
                    <td>
                        <Link to={`edit/${el.id}`} className="btn btn-info"><i className="fas fa-edit    "></i></Link>
                        <a href="" onClick={(e) => categoryDelete(e,el.id)} className="btn btn-danger"><i className="fas fa-trash    "></i></a>
                    </td>
                </tr>
            )
        });
    }
    

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">All Categories
                            <Link to={'/panel/category/add'} className="btn btn-success float-end">Add Category</Link>
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
                                    {category_view}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}