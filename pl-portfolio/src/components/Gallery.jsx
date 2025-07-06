// src/components/Gallery.jsx
import { images } from '../data/images';

export default function Gallery() {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded shadow-md">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
  );
}
