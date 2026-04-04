import { useState } from "react";

export default function useFetch(url = "", options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e);
      console.error(e);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, error, pending];
}
