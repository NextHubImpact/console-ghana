import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import slide1 from '../assets/homepage/slider/slider-1.jpg'
import { IoArrowForward } from 'react-icons/io5'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    const [index, setIndex] = useState(0);
    const sliderImages = [
            
        {
          img: slide1,
          title: "Connecting the Unconnected.",
          article: 'Welcome to Rural Code Camp, a Not for Profit Organisation based in Ghana , empowering kids and youth in Rural communities with Digital literacy. Join us in our journey to create a digitally inclusive society where every child has access to technology and coding education.',
          link: "Learn More",
          icon: <IoArrowForward className="text-red-700" />,
        },

    ]

  return (
    <div className='slideshow '>
    
        <div className="slideshowSlider"
             s3tyle={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
             >
            {sliderImages.map((images, index) => (
              <div className="slide " key={index}>
                <img alt="hero photo" />
                <div
                  style={{      
                    backgroundImage: `url(${images.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start', 
                    marginTop: "rem", 
                }}
                 className=' h-[70vh] text-center text-white xl:text-start xl:h-[100vh]'
                >
                  <div className="w-[%] justify-center ml-0 xl:w-[40%] flex xl:ml-20 xl:items-start flex-col gap-4 items-center">
                    <h1 className='text-3xl text-wrap xl:text-6xl text-[#faaf40] text-cente text-wrap font-bold '>
                    <ReactTyped 
                    strings={[images.title]}
                    typeSpeed={200}
                    loop = {false}
                    backSpeed={5}
                    cursorChar="_"
                    showCursor={true}         
                     />
                    </h1>             
                    <p className='text- text-wrap'>{images.article}</p>
                    <NavLink to='/about' >                
                      <button className='bg-[#faaf40] w-[%] py-3 px-6 rounded flex items-center gap-4 mt-2 font-semibold'>{images.link}</button>
                    </NavLink>
                  </div>
                </div>
              
              </div>
            ))}
        </div>  
    </div>
  )
}

export default Hero
