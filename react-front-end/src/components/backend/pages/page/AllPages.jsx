import { Link } from "react-router-dom"
export default function AllPages(){
    const sliderDelete = (e) => {
        console.log(e)
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">All Pages
                                <Link to={'/panel/pages/add'} className="btn btn-success float-end">Add Page</Link>
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Page title</td>
                                        <td>something</td>
                                        <td><span className="btn btn-success">Published</span></td>
                                        <td>
                                            <Link to={`edit/1`} className="btn btn-info"><i className="fas fa-edit"></i></Link>
                                            <a href="" onClick={(e) => sliderDelete(e)} className="btn btn-danger"><i className="fas fa-trash    "></i></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}