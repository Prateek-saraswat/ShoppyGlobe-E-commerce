  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import { selectTotalQuantity } from "../redux/Selectors";
  import { setSearchQuery } from "../redux/SearchSlice";

  const Header = () => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector(selectTotalQuantity);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
      dispatch(setSearchQuery(e.target.value));
    }; 

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    return (
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeMobileMenu}>
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                Shoppy<span className="text-emerald-600">Globe</span>
              </span>
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products…"
                  onChange={handleSearchChange}
                  className="w-full pl-4 pr-10 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <Link
                  to="/"
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
                >
                  Cart
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">

              <Link
                to="/cart"
                className="relative flex items-center justify-center w-9 h-9 rounded-full text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:bg-gray-100 transition"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products…"
                onChange={handleSearchChange}
                className="w-full pl-4 pr-10 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100 pt-2">
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition"
                  >
                    Cart ({cartItemCount})
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

      </header>
    );
  };

  export default Header;
