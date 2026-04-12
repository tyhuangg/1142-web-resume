"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止觸發外層 <a> 連結
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 group/carousel">
      <img 
        src={images[current]} 
        alt={`Slide ${current}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity">
            <FaChevronLeft size={16} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity">
            <FaChevronRight size={16} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}