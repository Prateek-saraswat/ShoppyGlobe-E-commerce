
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProduct";
import { useSelector } from "react-redux";
import { selectSearchQuery } from "../redux/Selectors";

const ProductList = () => {
  const { data: products, loading, error } = useFetchProducts("https://dummyjson.com/products?limit=100");
  const searchQuery = useSelector(selectSearchQuery);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center">
          <svg className="w-9 h-9 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-700">Failed to load products</h2>
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

  if (!products) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">No products available</p>
      </div>
    );
  }

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              All Products
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Showing{" "}
              <span className="font-semibold text-emerald-600">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "result" : "results"}
              {searchQuery && (
                <span>
                  {" "}
                  for &quot;
                  <span className="text-gray-700 font-medium">{searchQuery}</span>
                  &quot;
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-9 h-9 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803a7.5 7.5 0 0 0 10.607 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-700">No products found</h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Try adjusting your search or browse all products below.
            </p>
            <button className="mt-2 px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition">
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductList;