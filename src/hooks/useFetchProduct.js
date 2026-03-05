import { useEffect, useState } from "react";

export default function useFetchProducts(URL) {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProduct() {
      const response = await fetch(URL);
      const {products} = await response.json();
      setProducts(products)
    }

     fetchProduct()
    

  }, [URL]);

  return products;
}
