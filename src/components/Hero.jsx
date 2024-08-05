import React, {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

import slide1 from '../assets/homepage/slider/slider-1.jpg'
import slide2 from '../assets/homepage/slider/slider-2.jpg'
import slide3 from '../assets/homepage/slider/slider-3.jpg'
import { IoArrowForward } from 'react-icons/io5'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    const [index, setIndex] = useState(0);
    // const timeoutRef = useRef(null);
    // const delay = 5500;

    // const [currentText, setCurrentText] = useState('');
    // const [currentIndex, setCurrentIndex] = useState(0);

    const sliderImages = [
            
        {
          img: slide1,
          title: "Conntecting the Unconnected.",
          article: 'Welcome to Rural Code Camp, a Not for Profit Organisation based in Ghana , empowering kids and youth in Rural communities with Digital literacy. Join us in our journey to create a digitally inclusive society where every child has access to technology and coding education.',
          link: "Learn More",
          icon: <IoArrowForward className="text-red-700" />,
        },

    ]

    // function resetTimeout() {
    //   if (timeoutRef.current) {
    //     clearTimeout(timeoutRef.current);
    //   }
    // }

    // useEffect(() => {
    //   if (currentIndex < text.length) {
    //     const timeout = setTimeout(() => {
    //       setCurrentText(prevText => prevText + text[currentIndex]);
    //       setCurrentIndex(prevIndex => prevIndex + 1);
    //     }, delay);
    
    //     return () => clearTimeout(timeout);
    //   }
    // }, [currentIndex, delay, text]);

    // useEffect(() => {
    //   resetTimeout()
    //   timeoutRef.current = setTimeout(() => 
    //    setIndex((prevIndex) => 
    //      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    //  ),
    //  delay,
    // );
    //   return () => {
    //     resetTimeout()
    //   };
    // }, [index]);

  return (
    <div className='slideshow '>
    
        <div className="slideshowSlider"
             style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
             >
            {sliderImages.map((images, index) => (
              <div className="slide " key={index}>
                <img  className='  h-[40%] object-cover lg:h-full ' alt="" />
                <div
                  style={{
                    backgroundImage: `url(${images.img})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100vw",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start', 
                    marginTop: "rem", 
                }}
                 className=' text-center text-white'
                >
                  <div className="w-[%] justify-center ml-0 xl:w-[40%] flex xl:ml-20 flex-col gap-4 items-center">
                    <h1 className='text-3xl text-wrap xl:text-6xl text-[#faaf40] text-cente text-wrap font-bold '>
                    <ReactTyped 
                    strings={[images.title]}
                    typeSpeed={200}
                    loop = {false}
                    backSpeed={20}
                    cursorChar="_"
                    showCursor={true}
          
                     />
                    </h1>
                  
                    <p className='text- text-wrap'>{images.article}</p>
                    <NavLink to={images.link} >                
                      <p className='bg-[#faaf40] w-[%] py-4 px-8 rounded flex items-center gap-4 mt-2 font-semibold'>{images.link}</p>
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
