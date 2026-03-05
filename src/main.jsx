import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import ProductList from './components/ProductsList.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

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

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={appRouter}>

   </RouterProvider>
  </StrictMode>,
)
