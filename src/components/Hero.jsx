import React, {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

import slide1 from '../assets/homepage/slider/slider-1.jpg'
import slide2 from '../assets/homepage/slider/slider-2.jpg'
import slide3 from '../assets/homepage/slider/slider-3.jpg'
import { IoArrowForward } from 'react-icons/io5'


const Hero = ({}) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5500;

    const sliderImages = [
       
       
        {
          img: slide1,
          title: "WHERE GREAT IDEAS TAKE FLIGHT",
          article:
            "open data enthusiasts & innovators. ",
          link: "More details",
          icon: <IoArrowForward className="text-red-700" />,
        },
        {
          img: slide2,
          title: "INNOVATION AND CREATIVITY",
          article:
            "welcome to console ghana. ",
          link: "More details",
          icon: <IoArrowForward className="text-red-700" />,
        },
        {
          img: slide3,
          title: "INTERNATIONAL STANDARD PROGRAMMES",
          article:
            "DTI offers a variety of programmes designed. ",
          link: "More details",
          icon: <IoArrowForward className="text-red-700" />,
        },

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
                <img  className=' slide-img h-[70vh] object-cover lg:h-full ' alt="" />
                <div
                  style={{
                    backgroundImage: `url(${images.img})`,
                    backgroundSize: "cover",
                    height: "95vh",
                    width: "100vw",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',   
                }}
                 className='uppercase text-white'
                >
                  <div className="w-[42%] flex flex-col gap-4 items-center">
                    <h1 className=' text-2xl '>{images.title}</h1>
                    <p className='text-[3rem] font-bold text-center text-wrap'>{images.article}</p>
                    <NavLink to={images.link} >                
                      <p className='bg-yellow-500 p-2 rounded flex items-center gap-4 mt-2 font-semibold'>{images.link}</p>
                    </NavLink>
                  </div>
                </div>
              
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
