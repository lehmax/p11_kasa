import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
};
