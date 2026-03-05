import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center flex flex-col items-center gap-6">

        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-emerald-50 flex items-center justify-center border-4 border-dashed border-emerald-200">
            <div className="relative">
              <svg
                className="w-20 h-20 text-emerald-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-rose-500 text-white text-sm font-black flex items-center justify-center shadow-md">
                ?
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-8xl font-black text-gray-100 leading-none select-none tracking-tight">
            404
          </h1>
          <h2 className="-mt-4 text-2xl font-extrabold text-gray-800 tracking-tight">
            Page Not Found
          </h2>
        </div>

        <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm p-4 text-left flex gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center mt-0.5">
            <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Error Details</p>
            <ul className="mt-1 space-y-0.5">
              <li className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>
                <span><strong className="text-gray-600">Error code:</strong> 404 — Not Found</span>
              </li>
              <li className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>
                <span><strong className="text-gray-600">Reason:</strong> The requested URL does not exist on this server</span>
              </li>
              <li className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>
                <span><strong className="text-gray-600">Possible cause:</strong> Broken link, mistyped URL, or removed page</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          Oops! The page you&apos;re looking for seems to have gone missing. It may
          have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            to="/"
            className="flex-1 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-150 shadow-md shadow-emerald-100"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Go to Home
          </Link>

         
        </div>

       

      </div>
    </main>
  );
};

export default NotFound;