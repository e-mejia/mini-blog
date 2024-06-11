import { useEffect, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect((url) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Data could not be fetched!");
            setError(err.message);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setData(null);
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err.message);
        });
    }, 1000);
  }, []);

  return { data, isPending, error };
}
