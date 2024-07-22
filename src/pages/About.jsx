import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import whoweare from "../assets/img-icons/whoweare.webp"
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import htu from "../assets/partners/tech.png"
import accra from '../assets/partners/Accra.png'
import asco from '../assets/partners/asco.jpg'
import knust from '../assets/partners/knust.png'
import techlabs from '../assets/partners/techlabs.jpg'
import asase from '../assets/partners/asase.jpg'

const About = () => {

  const highlightCard = [
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icons: {
       arrowIcon: <IoArrowForward className="text-red-700" />,
       whoweareIcon: whoweare,
      }, 
      img: progImg1,
    },
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
       }, 
      img: progImg2,
    },
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
       }, 
      img: progImg3
    },
  ];

  return (
    <div>


     <section className=" my-[5rem] flex flex-col gap-6 ">
      
      <div className="mx-8 flex flex-col  items-center lg:flex-row  gap-4 bg-[whitesmoke] ">

      <figure className="lg: flex justify-end w-[50%] p-  ">
          <img className="lg: w-[100%]   rounded-"  src={progImg1} alt="" />
        </figure>

      <div className="lg:w-[50%] p-4  gap-4 flex flex-col items-center  lg:flex-row ">
        {/* left article --who we are-- */}
       <div className=" w-full flex justify-between flex-col gap-8 ">
          <div className="">
            <h1 className="uppercase font-bold text-red-700 text-3xl ">
              who we are
            </h1>
            <hr className="w-[20%] rounded mt-6 h-1 bg-red-700" />
          </div>
          <article className="leading-8 text-[20px]">
            Our mission is to become the leading industrial job training and
            prototype center in West Africa to transform the livelihoods of
            young people in TVET. DTI firmly believes that education is the
            cornerstone of creating opportunities for individuals and
            communities. Our commitment to providing exceptional technical and
            vocational training is geared towards equipping our students with
            the necessary skills and knowledge to thrive in today's fast-paced
            and highly competitive job market.
          </article>

          <div className="flex items-center gap-4 font-semibold ">
            <h2 className="text-[20px] ">About us </h2>
            <IoArrowForward className="text-red-700" />
          </div>
        </div>
       </div>
           
           {/* right img */}
      
      </div>
  
      </section>

        <section className="">
       <div className="mx-8 ">
       <div className="mt-14 mb-[6rem] lg:flex  xl:flex justify-between gap-8 ">
          {highlightCard.map((val, index) => {
            const { title, article, link, icons } = val;
            return (
              <div key={index} className=" flex flex-col  items-center gap-2 bg-[whitesmoke] p- rounded-[1rem] shadow-sm mb-4 lg:w-[30%] h-[60%] xl:w-[28%] p-8">
                 <div className="mb-6">
                  <img src={icons.whoweareIcon} alt="" />
                 </div>
                <h2 className="font-semibold text-nowrap">{title}</h2>
                <article className=" text-center">
                  {article}
                </article>
                <div className="bg-yellow-500 p-2 rounded flex items-center gap-4 mt-2 font-semibold">
                  {link}
                  {icons.arrowIcon}
                </div>
              </div>
            );
          })}
        </div>
       </div>
      </section>

        {/* partners */}
        <section className="">
         <div className="mx-8">  
         <div className="mt-14 lg:flex items-center my-14">
            <div className="flex  flex-col gap-6  lg:w-[50%] ">
                <div className="uppercase font-semibold flex mb-3  flex-col gap-3">
                  <h2 className="text-[30px]">
                     INDUSTRY PARTNERS
                  </h2>
                  <hr className="text-4xl w-[20%] rounded mt-4 h-1 bg-red-700"/>
                </div>
                <div className="mb-">
                  <article className="leading-6 text-[18px]">
                  The DTI Edge helps our learners to build the skills and character necessary for an effective mindset shift for a continent limited by negative mindset. 
                  Our learners continue to make a difference in the world through their work.
                  </article>
                </div>
                <div className="flex items-center font-semibold gap-4">
                <span>Read More </span>
                <IoArrowForward className="text-[#c4002c]"/> 
                </div>
              </div>

              <div className="lg:flex-1">
                    <div className="flex flex-wrap items-center justify-around my-[4rem] gap-8">
                          <img className="w-[30%] lg:w-[20%]" src={htu} alt="" />
                          <img className="w-[30%] lg:w-[20%]" src={asase} alt="" />
                          <img className="w-[30%] lg:w-[20%]" src={techlabs} alt="" />
                          <img className="w-[30%] lg:w-[20%]" src={asco} alt="" />
                          <img className="w-[30%] lg:w-[20%]" src={knust} alt="" />
                          <img className="w-[30%] lg:w-[20%]" src={accra} alt="" />
                    </div>
              </div>
         </div>
         </div>
      </section>
    </div>
  )
}

export default About
