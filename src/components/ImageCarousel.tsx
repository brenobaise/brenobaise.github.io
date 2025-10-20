import { useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

export default function ImageCarousel() {
  const images: CarouselImage[] = [
    { src: "/project1.png", alt: "Project 1" },
    { src: "/project2.png", alt: "Project 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full max-w-4xl mx-auto'>
      {/* Carousel Container */}
      <div className='relative h-90 overflow-hidden rounded-2xl'>
        {/* Images */}
        {images.map((image: CarouselImage, index: number) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-full object-contain'
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-amber-100/20 hover:bg-amber-400/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110'
          aria-label='Previous image'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-amber-100/20 hover:bg-amber-400/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110'
          aria-label='Next image'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className='flex justify-center gap-2 mt-4'>
        {images.map((_: CarouselImage, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-amber-400 w-8"
                : "bg-slate-400 hover:bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
