import { useRef } from 'react';
import QRCode from 'qrcode';

export default function useQRCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = async (text: string, qrColor: string = '#000000', bgColor: string = '#ffffff') => {
    if (!canvasRef.current || !text) return;
    
    try {
      await QRCode.toCanvas(canvasRef.current, text, {
        color: {
          dark: qrColor,
          light: bgColor,
        },
        width: 256,
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const download = () => {
    if (!canvasRef.current) return;
    
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return { canvasRef, generate, download };
}