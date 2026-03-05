import { useEffect, useState } from "react";

export default function useFetchProducts(URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(URL);
        const json = await response.json();
        // Check if response has products array (list) or is a single product
        if (json.products) {
          setData(json.products);
        } else {
          setData(json); // Single product
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [URL]);

  return { data, loading };
}
