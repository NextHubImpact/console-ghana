import React from 'react'
import gi1 from '../assets/main/gi1.jpg'
import gi2 from '../assets/main/gi2.jpg'
import Contact from './Contact'

const GetInvolve = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center pt-[8rem] m-8">
        <img className='w-[40%]' src={gi1} alt="" />
        <img className='w-[40%]' src={gi2} alt="" />
      </div>
      {/* <Contact/> */}
    </div>
  )
}

export default GetInvolve
