import React, {useState} from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom'
import lightLogo from '../assets/logo/rural-logo.png'
import { FaX } from 'react-icons/fa6';


const Footer = () => {
//    const [year , setYear] = useState(new Date());

   const getYear = () => {
       return new Date().getFullYear()
   }


  return (
    <div className='bg-black text-white '>
      <div className=" flex flex-col gap-[2rem] pt-[4rem] px-8 pb-[rem] lg:px-4">
      <div className="flex flex-col  gap-8 lg:flex-row  justify-between ">
        <div className="lg:w-[40%]">
           <NavLink to='/'>
           <img className='w-[20%] rounded-[50%] bg-[white] border' src={lightLogo} alt="logo" />
           </NavLink>
            <article className='leading-6 mt-10'>
            DTI’s mission is to become the leading industrial job training and prototype center in West Africa to transform the livelihoods of young people in TVET.
            </article>
        </div>

      <div className=" flex flex-col gap-[1.5rem] p-4 lg:flex-row">
         <div className="">
            <h2 className=' font-semibold' >Contact</h2>

            <ul>
                <li><a href="#">Mempeasem, East Legon – Accra</a></li>
                <li><a href="#">behind Ghana Meteorological Agency</a></li>
                <li><a href="#">GA-484-6124</a></li>
                <li><a href="#">Our Curriculum</a></li>
                <li><a href="#">info@dtiafrica.edu.gh</a></li>
                <li><a href="#">+233 (0) 541 693534</a></li>
            </ul>

            <div className="flex gap-4 py-2 text-[24px]">
                <Link to='https://x.com/ruralcodecampgh'>         
                <FaTwitter/>
                </Link>

                <Link to='https://www.facebook.com/profile.php?id=61562999973794'>
                <FaFacebook />
                </Link>

                <FaInstagram/>
                <FaLinkedin />
            </div>
         </div>
      </div>
     </div>
      <hr/>
      {/* divider */}
     <div className="flex justify-center mb-2">
     
        <div className="">
             &copy; {getYear()} DTI. ALL RIGHTS RESERVED.
        </div>
     </div>
      </div>
    </div>
  )
}

export default Footer
