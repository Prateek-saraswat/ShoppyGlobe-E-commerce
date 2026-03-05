import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import ProductList from './components/ProductsList.jsx'

const appRouter = createBrowserRouter([

  {
    path: "/",
    element:<App />,
    children:[
      {
        path: '/',
        element: <ProductList />
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
