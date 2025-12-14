import { useState, useEffect } from 'react';

const cache = new Map();

function useCachedFetch(url) {
       console.log(cache)
  const [data, setData] = useState(cache.get(url));
  const [loading, setLoading] = useState(!cache.has(url));
  const [error, setError] = useState(null);

  useEffect(() => {
 
    if (!cache.has(url)) {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(result => {
          cache.set(url, result);
          setData(result);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading, error };
}

export default useCachedFetch;
