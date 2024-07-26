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
          title: "Conntecting the Unconnected.",
          article:
            "Welcome to Rural Code Camp! Our mission is to bridge the digital divide by empowering students in rural Ghana with essential digital skills. Join us in our journey to create a digitally inclusive society where every child has access to technology and coding education. ",
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
    <div className='slideshow mt'>
    
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
                    height: "86vh",
                    width: "100vw",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start', 
                    marginTop: "4rem", 
                }}
                 className=' text-white'
                >
                  <div className="w-[40%] flex ml-12  flex-col gap-4 itms-center">
                    <h1 className=' text-6xl text-[#faaf40] text-cente text-wrap font-bold '>{images.title}</h1>
                    <p className='text-2xl text-wrap'>{images.article}</p>
                    <NavLink to={images.link} >                
                      <p className='bg-[#faaf40] w-[33%] py-4 px-8 rounded flex itms-center gap-4 mt-2 font-semibold'>{images.link}</p>
                    </NavLink>
                  </div>
                </div>
              
              </div>
            ))}
        </div>

        {/* <div className="slideshowDots text-center">
            {sliderImages.map((_, idx) => (
                <div 
                className={`slideshowDot${index === idx ? " active" : ""}`}
                 key={idx}
                 onClick={() => {
                  setIndex(idx);
                }}
                ></div>
            ))}
        </div> */}

  
    </div>
  )
}

export default Hero
