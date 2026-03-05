import Header from "./components/Header.jsx"
import useFetchProducts from "./hooks/useFetchProduct.js"

function App() {

  const response = useFetchProducts("https://dummyjson.com/products")
  console.log(response)

  return (
    <>
    <Header />
    </>
  )
}

export default App
