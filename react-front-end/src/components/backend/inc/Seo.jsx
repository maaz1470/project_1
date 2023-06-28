export default function Seo({data, changeData}){
    return (
        <div>
            <div className="mb-3 row">
                <label htmlFor="name" className="col-md-2 col-form-label">Meta Title</label>
                <div className="col-md-10">
                    <input value={data.meta_title} onChange={changeData} className="form-control" type="text" id="meta_title" name="meta_title" placeholder="Meta Title" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="name" className="col-md-2 col-form-label">Meta Keywords</label>
                <div className="col-md-10">
                    <input value={data.meta_keywords} onChange={changeData} className="form-control" type="text" id="meta_keywords" name="meta_keywords" placeholder="Meta Keywords" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="name" className="col-md-2 col-form-label">Meta Description</label>
                <div className="col-md-10">
                    <textarea value={data.meta_description} onChange={changeData} className="form-control" id="meta_description" name="meta_description" placeholder="Meta Description" />
                </div>
            </div>
        </div>
    )
}