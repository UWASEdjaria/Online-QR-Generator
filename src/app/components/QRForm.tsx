import { useState } from 'react';

interface QRFormProps {
  onGenerate: (content: string) => void;
  onSave: (data: { content: string; color: string; bgColor: string }) => void;
}

export default function QRForm({ onGenerate, onSave }: QRFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onGenerate(content);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Enter text or URL:
        </label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text or URL to generate QR code"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        Generate QR Code
      </button>
    </form>
  );
}