import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const signial = abortController.signal;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "00";
          throw err;
        }
        const json = await res.json();
        if (!signial.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signial.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signial.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [url]);
  return { data, error, loading };
};
