import { useState, useEffect } from 'react';
import { SETLISTFM_API_KEY } from '@env'; // Ensure you import correctly

const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return; // Do not fetch if the query is empty

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodeURIComponent(query)}&p=1`, 
          {
            headers: {
              'Accept': 'application/json',
              'x-api-key': SETLISTFM_API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useFetch;