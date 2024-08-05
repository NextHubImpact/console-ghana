import React, {useState} from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom'
import rccLogo from '../assets/logo/rcc-logo.jpeg'

const Footer = () => {
//    const [year , setYear] = useState(new Date());

   const getYear = () => {
       return new Date().getFullYear()
   }


  return (
    <div className='bg-black text-white  '>
      <div className="xl:mx-10 flex flex-col items-cente justify-between gap-[rem] bg-[]  pt-[4rem] px-8 pb-[rem] lg:px-4">
      <div className="flex flex-col  gap-[3rem] lg:flex-row  justify-betwe p-">
        <div className="lg:w-[30%]">
           <NavLink to='/'>
           <img className='w-[80%]  bg-[white] border' src={rccLogo} alt="logo" />
           </NavLink>
            <article className='leading-6 mt-10'>
            DTI’s mission is to become the leading industrial job training and prototype center in West Africa to transform the livelihoods of young people in TVET.
            </article>
        </div>

       <div className=" flex flex-col gap-4 items-cente p- lg:flex-row text-[18px]  justify-between flex-1">
        <div className="">
        <h2 className=' font-semibold mb-2' >Quick Links</h2>
        <div className="flex flex-col gap-2 py-  text-[px]">
                <Link className='flex items-center gap-2' to='/'>         
                  <p>Home</p>
                </Link>

                <Link className='flex items-center gap-2' to='/aboutus'>      
                <p>About Us</p>
                </Link>
               
                <Link className='flex items-center gap-2' to='/programs'> 
                <p>Programs</p>
                </Link>
              
                <Link className='flex items-center gap-2' to='/getinvolve'>
                <p>Get Involve</p>
                </Link>

                <Link className='flex items-center gap-2' to='/blog'>
                <p>Blog</p>
                </Link>
            </div>
        </div>

        <div className="">
          <h1 className='font-semibold mb-2'>Follow Us</h1>
           
          <div className="flex flex-col gap-4 py-  text-[px]">
                <Link className='flex items-center gap-2' to='https://x.com/ruralcodecampgh'>         
                <FaTwitter/>
                <p>Twitter</p>
                </Link>

                <Link className='flex items-center gap-2' to='https://www.facebook.com/profile.php?id=61562999973794'>
                <FaFacebook />
                <p>Facebook</p>
                </Link>
               
                <Link className='flex items-center gap-2' to=''>
                <FaInstagram/>
                <p>Instagram</p>
                </Link>

               
                <Link className='flex items-center gap-2' to=''>
                 <FaLinkedin/>
                <p>LinkedIn</p>
                </Link>
            </div>
        </div>

         <div className="flex flex-col gap-4 mb-6">
            <h2 className=' font-semibold' >Contact Us</h2>

            <div>
                <p> Email: <span className='text-[gray] pointer'>info@ruralcodecamp.org</span> </p>                
                <p>Phone: <span className='text-[gray] pointer'>+233 551143989</span> </p>
                <address>Address: <span className='text-[gray] pointer'>CC-980-73, Accra- Ghana</span> </address>
            </div>

            <div className="">
              <h1 className='text-[gray]'>subscribe to our newsletter:</h1>
              <form action="">
                <input type="email" className='p-2' placeholder='Email Address' /> 
                <Link to=''>
                <button type="submit" className="bg-[#faaf40] p-2">Subscribe</button>
                </Link>
              </form>
            </div>
         </div>
      </div>
     </div>
      <hr/>
      {/* divider */}
     <div className="flex justify-center my-4">
     
        <div className="">
             &copy; {getYear()} DTI. ALL RIGHTS RESERVED.
        </div>
     </div>
      </div>
    </div>
  )
}

export default Footer
