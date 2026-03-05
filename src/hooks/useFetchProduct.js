import { useEffect, useState } from "react";

export default function useFetchProducts(URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const json = await response.json();
        // Check if response has products array (list) or is a single product
        if (json.products) {
          setData(json.products);
        } else {
          setData(json); // Single product
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "Failed to fetch data");
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [URL]);

  return { data, loading, error };
}
