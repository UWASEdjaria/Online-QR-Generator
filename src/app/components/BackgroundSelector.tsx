interface BackgroundSelectorProps {
  onChange: (color: string) => void;
}

export default function BackgroundSelector({ onChange }: BackgroundSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Background Color:</label>
      <input 
        type="color" 
        defaultValue="#ffffff"
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
      />
    </div>
  );
}
