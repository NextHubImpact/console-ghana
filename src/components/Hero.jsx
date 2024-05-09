import React, {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar'
import slide1 from '../assets/homepage/slider/slider-1.jpg'
import slide2 from '../assets/homepage/slider/slider-2.jpg'
import slide3 from '../assets/homepage/slider/slider-3.jpg'


const Hero = ({}) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5500;

    const sliderImages = [
        slide1,
        slide2,
        slide3
    ]

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(() => 
       setIndex((prevIndex) => 
         prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
     ),
     delay,
    );
      return () => {
        resetTimeout()
      };
    }, [index]);

  return (
    <div className='slideshow'>
    
        <div className="slideshowSlider"
             style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
             >
            {sliderImages.map((images, index) => (
              <div className="slide " key={index}>
                <img src={images} className='slide-img h-[70vh] object-cover lg:h-full ' alt="" />
              </div>
            ))}
        </div>

        <div className="slideshowDots text-center">
            {sliderImages.map((_, idx) => (
                <div 
                className={`slideshowDot${index === idx ? " active" : ""}`}
                 key={idx}
                 onClick={() => {
                  setIndex(idx);
                }}
                ></div>
            ))}
        </div>

  
    </div>
  )
}

export default Hero
