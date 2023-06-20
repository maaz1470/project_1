/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import toastr from "toastr";
import 'toastr/build/toastr.css';

export default function SingleProduct(props){
    const {image, link, name, normal_price, price, el} = props;
    const {addItem} = useCart();
    const addCart = () => {
      toastr.options.progressBar = true;
      toastr.options.positionClass = 'toast-bottom-right';
      toastr.options.debug = false;
      addItem(el)
    }
    return (
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <img
                src={image}
                alt="product 1"
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <Link
                  to={link}
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </Link>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link to={link}>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {name}
                </h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">{normal_price}</p>
                <p className="text-sm text-gray-400 line-through">{price}</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                  <span>
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <button
              onClick={() => addCart()}
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </button>
        </div>
    )
}