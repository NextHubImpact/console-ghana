import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

import homeSide from '../assets/main/home-side.jpg'
import campusImg from '../assets/homepage/slider/slider-3.jpg'

const Content = () => {
  return (
    <main className=' mx-8'>
      <section className="w-full justify-between gap-4 flex items-center mt-14 flex-wrap">
       
        <div className=" w- flex flex-col gap-8 ">
            <div className="">
                <h1 className='uppercase font-bold text-red-700 text-3xl '>who we are</h1> 
                <hr className='text-4xl w-[20%] rounded mt-6 h-1 bg-red-700' />
            </div>
            <article className='leading-10 text-[20px]'>
            Our mission is to become the leading industrial job training and prototype center in West Africa to transform the livelihoods of young people in TVET. 
            DTI firmly believes that education is the cornerstone of creating opportunities for individuals and communities. 
            Our commitment to providing exceptional technical and vocational training is geared towards equipping our students with the necessary skills and knowledge to thrive in today's fast-paced and highly competitive job market.
            </article>

            <div className="flex items-center gap-4 font-semibold ">
            <h2 className='text-[20px] '>About us </h2>
            <IoArrowForward className='text-red-700'/> 
            </div>
        </div>

        <div className="">
             <img className='' src={homeSide} alt="" /> 
        </div>
      </section>

      <section>
          <div className="flex flex-wrap justify-center mt-14 mb-5">
          <div className="">
            <img src={campusImg} alt="" />
          </div>
          <div className="w-full bg-yellow-500 px-8 h-60 flex flex-col gap-4  justify-center">
            <h2 className='uppercase font-bold text-[20px] text-red-700'>tour our campus</h2>
            <IoArrowForward className='text-red-700'/>
          </div>
          </div>
      </section>

      <section>

      </section>

    </main>
  )
}

export default Content
