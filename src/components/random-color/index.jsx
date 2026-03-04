import { useEffect, useState } from "react";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomColor = () => {
    if (colorType === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
      }

      setColor(hexColor);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      setColor(`rgb(${r}, ${g}, ${b})`);
      console.log(colorType);
    }
  };

  useEffect(() => {
    handleCreateRandomColor();
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column"
        }}
      >
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
