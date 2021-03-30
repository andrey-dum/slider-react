import React, { useState, useEffect } from 'react'
import Photo1 from '../img/photo-1.jpg'
import Photo2 from '../img/photo-2.jpg'
import Photo3 from '../img/photo-3.jpg'

const images = [
  <img key={Photo1} src={Photo1} alt={Photo1} />,
  <img key={Photo2} src={Photo2} alt={Photo2} />,
  <img key={Photo3} src={Photo3} alt={Photo3} />,
  // Photo1,
  // Photo2,
  // Photo3,
]

function Slider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 3000)


    return () => clearInterval(interval)
  }, []);

  const prevIndex = active ? active - 1 : images.length - 1
  const nextndex = active === images.length - 1 ? 0 : active + 1


  return (
    <div className="slider">
      <div
        className="slider__image slider__image-prev"
        key={prevIndex}
      >
        {images[prevIndex]}
      </div>
      <div
        className="slider__image"
        key={active}
        >
          {images[active]}
        </div>
      <div
        className="slider__image slider__image-next"
        key={nextndex}
      >
        {images[nextndex]}
      </div>
    </div>
  )
}

export default Slider
