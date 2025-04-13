import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    console.log("ListingsScreen.js response.map:", response.data.map((listing) => listing.images[0].url));
    setLoading(false);
    if (!response.ok) return setError(true);
    
    setError(false);
    setListings(response.data);
  };

  return { data, error, loading, request };
}