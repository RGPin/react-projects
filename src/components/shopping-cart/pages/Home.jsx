import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProducts(signal) {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products", {
        signal,
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error(e);
        setError(e);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchProducts(signal);

    return () => controller.abort();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products?.length &&
            products.map((product) => <ProductTile product={product} />)}
        </div>
      )}
    </div>
  );
}
