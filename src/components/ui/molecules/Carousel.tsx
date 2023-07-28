import React, { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  interval = 3000,
  autoPlay = true,
  showControls = true,
  showIndicators = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleAutoPlay = () => {
    if (autoPlay) {
      goToNextSlide();
    }
  };

  // Start auto-play when the component mounts
  useEffect(() => {
    const timer = setInterval(handleAutoPlay, interval);
    return () => clearInterval(timer);
  }, [activeIndex, autoPlay, interval]);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${items.length * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="carousel-slide">
              {item.content}
            </div>
          ))}
        </div>
        {showControls && (
          <div className="carousel-controls">
            <button onClick={goToPrevSlide} className='carouselbtn'>&#8249;</button>
            {showIndicators && (
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <span
                key={index}
                className={`carousel-indicator ${index === activeIndex ? 'active' : ''
                  }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
            <button onClick={goToNextSlide} className='carouselbtn'>&#8250;</button>
          </div>
          
        )}
      </div>


    </>

  );
};

export default Carousel;
