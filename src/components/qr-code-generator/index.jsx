import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter value"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input || input.trim() === ""}
          onClick={() => setQrCode(input)}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
}
