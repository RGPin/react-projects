import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products && data.products.length) setData(data.products);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (loading) return <div>Loading please wait</div>;

  if (error) return <div>Error! {error}</div>;

  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item, index) => <p key={index}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
