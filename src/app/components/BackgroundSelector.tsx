interface BackgroundSelectorProps {
  onChange: (color: string) => void;
}

export default function BackgroundSelector({ onChange }: BackgroundSelectorProps) {
  return (
    <div>
      <label className="block mb-1 text-black font-medium ">Background Color:</label>
      <input 
        type="color" 
        defaultValue="#ffffff"
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
      />
    </div>
  );
}
