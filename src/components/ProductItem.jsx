import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"

const ProductItem = ({product}) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
  }

  return (
    <Link to={`/products/${product.id}`}>
    <div className="w-72 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">

      <div className="relative bg-gray-50 h-52 flex items-center justify-center p-4">
        
        

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest">
            {product.brand}
          </span>
          <span className="text-[11px] text-gray-400 capitalize bg-gray-100 px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        

        {/* Price row */}
        <div className="flex items-end gap-2">
          <span className="text-sm text-gray-400  mb-0.5">
            ${product.price}
          </span>
        </div>

       

        <div className="flex gap-2 mt-auto pt-1">
          <button 
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 shadow-md shadow-emerald-100"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductItem;
