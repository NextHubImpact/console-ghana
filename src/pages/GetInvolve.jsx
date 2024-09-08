import React from 'react'
import gi1 from '../assets/main/gi1.jpg'
import gi2 from '../assets/main/gi2.jpg'
import Contact from './Contact'

const GetInvolve = () => {
  return (
    <div className=' ustify-center items-center pt-[6rem] xl:m-8'>
      <div className="items-center text-center mb-8">
        <header className='p-2 items-center xl:mx-[10rem]'>
          <h1 className='font-bold text-[#262063]  text-5xl'>Get Involve</h1>
          <article className='p-2 mt-4'>
            <p>
            Rural Code Camp is on a mission to empower the youth in Ghana’s rural communities with essential digital skills. By bringing technology education directly to schools and villages, we are ensuring that every child has the opportunity to thrive in the digital age
            </p>
          </article>
        </header>
      </div>
      <div className="grid mb-8 pt-8 xl:grid-cols-2 place-items-center gap-4 justify-center ">
        <img className='w-[90%] xl:w-[80%] ' src={gi1} alt="" />
        <img className='w-[90%] xl:w-[80%]' src={gi2} alt="" />
      </div>
      {/* <Contact/> */}
    </div>
  )
}

export default GetInvolve
