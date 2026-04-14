export default function ScrollToSection() {
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
  ];
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button>Click to Scroll</button>
      {data.map((item) => (
        <div style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
