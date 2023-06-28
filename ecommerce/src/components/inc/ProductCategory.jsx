/* eslint-disable react/prop-types */
import { root } from '../hook/useFileLocation';
import SingleProduct from './Product/SingleProduct';
export default function ProductCategory(props){
    const {title, categoryProduct} = props;
    return (
        <>
            <div className="container pb-16">
              <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                {title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                  categoryProduct.map(el => <SingleProduct el={el} key={el.id} image={`${root}/product/${el.product_image}`} link={`/product/${el.slug}`} name={el.name} normal_price={`${el.sell_price}$`} price={`${el.price}$`} />)
                }

              </div>
          </div>
      </>
    )
}