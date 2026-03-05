

import useFetchProducts from "../hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {

  //destructuring id from useParams
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch single product using custom hook and takifn id from params
  const { data: product, loading, error } = useFetchProducts(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">Loading product...</p>
      </div>
    );
  }

  //conditional rendering 
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center">
          <svg className="w-9 h-9 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-700">Failed to load product</h2>
        <p className="text-sm text-gray-500">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };


  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <div className="flex items-center justify-center bg-gray-50 rounded-xl h-72 p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-3">

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="capitalize bg-gray-100 px-2 py-0.5 rounded-full">{product.category}</span>
              <span>·</span>
              <span className="font-mono">{product.sku}</span>
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900">{product.title}</h1>

            <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full capitalize">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mt-1">
              <span className="text-sm text-gray-400  mb-0.5">${product.price}</span>
            </div>

            {/* Simple info rows */}
            <div className="text-sm text-gray-600 flex flex-col gap-1 border-t border-gray-100 pt-3 mt-1">
              <p><span className="text-gray-400">Rating:</span> {product.rating} / 5</p>
              <p><span className="text-gray-400">Stock:</span> {product.stock} units — {product.availabilityStatus}</p>
              <p><span className="text-gray-400">Shipping:</span> {product.shippingInformation}</p>
              <p><span className="text-gray-400">Warranty:</span> {product.warrantyInformation}</p>
              <p><span className="text-gray-400">Returns:</span> {product.returnPolicy}</p>
              <p><span className="text-gray-400">Min. Order:</span> {product.minimumOrderQuantity}</p>
            </div>

            {/* Add to Cart button */}
            <button 
              onClick={handleAddToCart}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-emerald-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        

       

      </div>
    </main>
  );
};

export default ProductDetails;