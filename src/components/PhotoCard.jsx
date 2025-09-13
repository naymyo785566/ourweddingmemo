import { motion } from "framer-motion";

export default function PhotoCard({ src, alt }) {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100  transition-opacity flex items-end">
        <div className="p-3 text-white text-sm">{alt}</div>
      </div>
    </div>
  );
}
