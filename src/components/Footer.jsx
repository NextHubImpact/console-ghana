import React, {useState} from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import lightLogo from '../assets/logo/logo-white.png'


const Footer = () => {
//    const [year , setYear] = useState(new Date());

   const getYear = () => {
       return new Date().getFullYear()
   }


  return (
    <div className='bg-black text-white '>
      <div className=" flex flex-col gap-[4rem] pt-[4rem] px-8 pb-[2rem] lg:px-4 ">
      <div className="flex flex-col  gap-8 lg:flex-row gap- justify-between ">
        <div className="lg:w-[40%]">
            <img className='w-[60%] ' src={lightLogo} alt="" />
            <article className='leading-6 mt-10'>
            DTI’s mission is to become the leading industrial job training and prototype center in West Africa to transform the livelihoods of young people in TVET.
            </article>
        </div>

      <div className=" flex flex-col gap-[1.5rem] lg:flex-row">
         <div className="">
            <h2 className='mb-8 font-semibold hover:underline' >Academics</h2>

            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">Our Curriculum</a></li>
                <li><a href="#">(PACs)</a></li>
                <li><a href="#">Library</a></li>
            </ul>
         </div>
         <div className="">
            <h2 className='mb-8 font-semibold' >Admissions</h2>

            <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">Our Curriculum</a></li>
                <li><a href="#">(PACs)</a></li>
                <li><a href="#">Library</a></li>
            </ul>
         </div>
         <div className="">
            <h2 className='mb-8 font-semibold' >Contact</h2>

            <ul>
                <li><a href="#">Mempeasem, East Legon – Accra</a></li>
                <li><a href="#">behind Ghana Meteorological Agency</a></li>
                <li><a href="#">GA-484-6124</a></li>
                <li><a href="#">Our Curriculum</a></li>
                <li><a href="#">info@dtiafrica.edu.gh</a></li>
                <li><a href="#">+233 (0) 541 693534</a></li>
            </ul>

            <div className="flex gap-4 my-4 text-[24px]">
                <FaFacebook />
                <FaInstagram/>
                <FaLinkedin />
            </div>
         </div>
      </div>
     </div>
     <hr className=' rounded m h-1 bg-white '/>
     <div className="flex flex-col items-center gap-4">
        <div className="uppercase ">
           <ul className='flex flex-wrap gap-4 justify-center items-center'>
            <li><a href="">donate</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">campus life</a></li>
            <li><a href="">resources</a></li>
            <li><a href="">admission registration</a></li>
           </ul>
        </div>
        <div className="mt-4 lg:mt-0">
             &copy; {getYear()} DTI. ALL RIGHTS RESERVED.
        </div>
     </div>
      </div>
    </div>
  )
}

export default Footer
