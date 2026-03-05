import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/store.js'

// Lazy load page components for code splitting
const ProductList = lazy(() => import('./components/ProductsList.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'))
const CartPage = lazy(() => import('./pages/CartPage.jsx'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'))

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
)

const appRouter = createBrowserRouter([

  {
    path: "/",
    element:(
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFound />
      </Suspense>
    ),
    children:[
      {
        path: '/',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductList />
          </Suspense>
        )
      },
      {
        path:'/products/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ProductDetails />
          </Suspense>
        )
      },
      {
        path:'/cart',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CartPage />
          </Suspense>
        )
      },
      {
        path:'/checkout',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CheckoutPage />
          </Suspense>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router ={appRouter}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
