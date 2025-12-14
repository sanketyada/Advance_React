import { useEffect, useState } from "react";

function useFetch(url) {
    
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  
 useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resdata) => {
        setData(resdata);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
}
export default useFetch;