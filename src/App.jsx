import { useState } from "react"
import Header from "./components/Header.jsx"
import useFetchProducts from "./hooks/useFetchProduct.js"
import { Outlet } from "react-router-dom"

function App() {

  

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
