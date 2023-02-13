import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error);
        setIsPending(false);
      });
  }, [url]);

  return { data, error, isPending, setData };
};

export default useFetch;
