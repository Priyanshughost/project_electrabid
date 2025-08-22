import React, { useEffect, useRef, useState } from 'react';

const images = [
  'https://assets-bg.gem.gov.in/resources/upload/shared_doc/web-banners_hindi-08_1730889956.png?version=20250610115317',
  'https://assets-bg.gem.gov.in/resources/images/banner/1st_Banner.jpg',
  'https://assets-bg.gem.gov.in/resources/upload/shared_doc/millets-lan1_1678775654.jpg'
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => resetTimeout();
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img src={img} alt={`slide-${i}`} className="w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-1"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-1"
      >
        ›
      </button>
    </div>
  );
}

export default ImageSlider;
