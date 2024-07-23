import React from 'react'
import phone from '../assets/img-icons/phone.webp'
import email from '../assets/img-icons/email.webp'
import location from '../assets/img-icons/map.webp'

const Contact = () => {

     const contactData = [
        {
            icon: phone ,
            title: 'contact details',
            info: '+233 303 944 393 | 053 9928 389' ,
        },
        {
            icon: email ,
            title: 'email',
            info: 'info.ruralcodecamp.org' ,
        },
        {
            icon: location ,
            title: 'location',
            info: `254 Dar es Salaam street, Agbogba, North Legon, Accra` ,
        },
     ]
  return (
    <div>
         <section>
            <div className="flex my-[10rem] items-center gap-8 justify-center">
                {contactData.map((val, index) => {
                    const {icon, title, info} = val;
                    return (
                        <div key={index} className='w-[%] flex flex-col  text-center gap-8 items-center justify-center' >
                              <div className="w-[%]">
                              <img src={icon} className='w-[%]' alt="" /> 
                              </div>
                              <div className="flex flex-col gap-2 items-center ">
                              <h1 className=' text-[18px] font-bold uppercase'>{title}</h1>
                              <p className='text-[#faaf40]'>{info}</p>
                              </div>
                        </div>
                    )
                })}
            </div>

      <div className='flex flex-col gap-12'>
       <div className="text-center">
       <h1>MAPS!</h1>
       <p className='text-2xl'>Please see map below</p>
       </div>
       <div className="flex items-center justify-center ">
       <iframe src="https://maps.google.com/maps?q=Nagino%20Dates%20Products&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
   
     style={{ border: 0 }}
     loading="lazy"
     allowfullscreen
     className='w-full h-[450px]'
      ></iframe>
       </div>
    </div>


         </section>
    </div>
  )
}

export default Contact
