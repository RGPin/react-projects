import { useState } from "react";

function RandomColor() {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000");

    const handleCreateRandomColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }
        
        setColor(hexColor);
    };

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: color
    }}>
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
    </div>
  );
}

export default RandomColor;
