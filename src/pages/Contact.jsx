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
         <section className='my-[5rem] mx-[2rem] py-10'>
            <div className="text-center uppercase">
                <h2>contact us</h2>
                <h1 className='text-[28px] font-semibold'>get in touch</h1>
            </div>
            <div className="flex  gap-8 justify-center items-center w-[%] my-[4rem]">
            <div className="flex p-2 gap-8 flex-w items- justify-center w-[%]">
                {contactData.map((val, index) => {
                    const {icon, title, info} = val;
                    return (                     
                        <div key={index} className='w-[40%] bg-[white] p-4  flex flex-col rounded shadow-md  text-center gap-4 items-center ' >
                              <div className="w-[%]">
                              <img src={icon} className='w-[%]' alt="" /> 
                              </div>
                              <div className="flex flex-col gap- items-center ">
                              <h1 className=' text-[14px] font-bold uppercase'>{title}</h1>
                              <p className='text-[14px] text-wrap text-[#faaf40]'>{info}</p>
                              </div>
                        </div>
                    )
                })}
            </div>
            {/* send message */}
             <div className=" justify-center p-4  flex flex-col bg-[white] w-[60%]">
                <div className="flex flex-col items-center gap-4 justify-center w-full">
                <div className='flex flex-col gap-4 items-cente justify-cente w-full'>           
                <div className="flex gap-8">
                <input className='border p-2  w-[100%]' type="name" placeholder='Your Name' />
                <input className='border p-2   w-[100%]' type="email"  placeholder='Your Email'/>  
                </div>
               <div className="">
               <input className='border p-2  w-[100%]' type="text" placeholder='Subject' />
               </div>
               </div>
               <textarea className='border p-2   resize-y w-full' name="message" placeholder='Message' id="">
                
                </textarea> 
               <button className='bg-[#faaf40]  text-black py-3 px-8' type="submit" aria-required >Send Message</button>
                </div>               
             </div>
            </div>

      <div className='flex flex-col gap-12'>
       <div className="text-center">
     
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
