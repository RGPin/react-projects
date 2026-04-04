import { useState } from "react";
import useFetch from ".";
import ScrollIndicator from "../scroll-indicator";

export default function UseFetchHookText() {
  const [display, setDisplay] = useState(false);
  const [data, error, pending] = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  if (pending) return <div>Loading, please wait...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <button onClick={() => setDisplay(!display)}>Click here</button>
      {display &&
        data.products.length &&
        data.products.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  );
}
