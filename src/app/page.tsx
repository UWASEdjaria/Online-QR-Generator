"use client"
import { useState } from "react";
import QRForm from "./components/QRForm";
import BackgroundSelector from "./components/BackgroundSelector";
import useQRCode from "./hooks/useQRCode";

export default function Home() {
  const { canvasRef, generate, download } = useQRCode();
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleSaveToBackend = async (data: any) => {
    try {
      const res = await fetch("/api/saveQR", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if(result.success) alert("QR saved!");
    } catch (err) { console.error(err) }
  }

  const handleGenerateQR = (content: string) => {
    generate(content, qrColor, bgColor);
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <QRForm onGenerate={handleGenerateQR} onSave={handleSaveToBackend} />

      <div className="flex gap-4 items-center">
        <div>
          <label>QR Color:</label>
          <input type="color" value={qrColor} onChange={e=>setQrColor(e.target.value)} />
        </div>
        <BackgroundSelector onChange={setBgColor} />
      </div>

      <canvas ref={canvasRef} className="border mx-auto mt-4"></canvas>

      <button onClick={()=>download()} className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition-all">Download QR</button>
    </div>
  )
}
