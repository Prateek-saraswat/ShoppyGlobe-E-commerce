import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import ProductList from './components/ProductsList.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const appRouter = createBrowserRouter([

  {
    path: "/",
    element:<App />,
    errorElement: <NotFound />,
    children:[
      {
        path: '/',
        element: <ProductList />
      },
      {
        path:'/products/:id',
        element: <ProductDetails />

      },
      {
        path:'/cart',
        element: <CartPage />

      },
      {
        path:'/checkout',
        element: <CheckoutPage />

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
