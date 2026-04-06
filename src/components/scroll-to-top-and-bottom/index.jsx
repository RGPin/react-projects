import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const [data, error, pending] = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  if (pending) return <h1>Loading, please wait...</h1>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul>
        {data &&
          data.products.length &&
          data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
      <h3>This is the bottom section</h3>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
    </div>
  );
}
