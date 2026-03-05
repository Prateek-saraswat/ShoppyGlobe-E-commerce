

import CartItem from "./CartItem";

const demoCartItems = [
  {
    id: 23,
    title: "Eggs",
    category: "groceries",
    price: 2.99,
    discountPercentage: 11.05,
    quantity: 2,
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
  },
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    quantity: 1,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 0.34,
    quantity: 1,
    thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
];

const CartPage = () => {
  const cartItems = demoCartItems;

  const subtotal = cartItems
    .reduce((acc, item) => {
      const discounted = item.price - (item.price * item.discountPercentage) / 100;
      return acc + discounted * item.quantity;
    }, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const shippingFee = subtotal > 50 ? 0 : 4.99;
  const grandTotal = (parseFloat(subtotal) + shippingFee).toFixed(2);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Your Cart
            <span className="ml-2 text-base font-semibold text-gray-400">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </h1>

          <a
            href="/"
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Continue Shopping
          </a>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-9 h-9 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-700">Your cart is empty</h2>
            <p className="text-sm text-gray-400 max-w-xs">
              Looks like you haven't added anything yet. Go explore products!
            </p>
            <a
              href="/"
              className="mt-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition"
            >
              Shop Now
            </a>
          </div>

        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 flex flex-col gap-3">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
                <h2 className="text-base font-bold text-gray-800 mb-4">Order Summary</h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold text-gray-800">${subtotal}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={`font-semibold ${shippingFee === 0 ? "text-emerald-600" : "text-gray-800"}`}>
                      {shippingFee === 0 ? "FREE" : `$${shippingFee}`}
                    </span>
                  </div>

                  {shippingFee > 0 && (
                    <p className="text-xs text-gray-400 -mt-1">
                      Add ${(50 - parseFloat(subtotal)).toFixed(2)} more for free shipping
                    </p>
                  )}

                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="font-bold text-gray-900">Grand Total</span>
                    <span className="font-black text-gray-900 text-base">${grandTotal}</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-emerald-100"
                >
                  Proceed to Checkout
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                <div className="flex items-center justify-center gap-3 mt-4">
                  {["Visa", "MC", "UPI", "COD"].map((method) => (
                    <span
                      key={method}
                      className="text-[10px] font-semibold text-gray-400 border border-gray-200 px-2 py-0.5 rounded"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;