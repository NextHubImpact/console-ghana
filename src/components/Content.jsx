import React, { useState, useEffect, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";

import homeSide from "../assets/main/home-side.jpg";
import campusImg from "../assets/homepage/slider/slider-3.jpg";
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import whoweare from "../assets/img-icons/whoweare.webp";

import htu from "../assets/partners/tech.png";
import accra from "../assets/partners/Accra.png";
import asco from "../assets/partners/asco.jpg";
import knust from "../assets/partners/knust.png";
import techlabs from "../assets/partners/techlabs.jpg";
import asase from "../assets/partners/asase.jpg";
import digitalSch from '../assets/partners/digital.jpeg'
import raspberry from '../assets/partners/raspberry.jpeg'
import { MdAccountCircle, MdTimer } from "react-icons/md";


const Content = () => {
  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null)
  // const delay = 2500;

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  const offer = [
    {
      title: "Foundations of Digital Literacy",
      article:" This module is designed to equip students with the essential skills and knowledge needed to navigate the digital world confidently and safely. We focus in building students strong skills in basic computer operations, understanding the internet, and recognizing the importance of online safety.",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
      },
      img: progImg1,
    },
    {
      title: "Digital Communication and Content Creation",
      article:
        "The Digital Communication and Content Creation module empowers students with the skills necessary to communicate effectively and create meaningful digital content. This module covers essential tools for digital communication, including email and social media, and teaches students how to create and manage various types of digital documents and presentations. ",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
      },
      img: progImg2,
    },
    {
      title: "Advanced Digital Skills and Career Preparation",
      article:
        "The Advanced Digital Skills and Career Preparation module is designed to take students' digital literacy to the next level, preparing them for future educational and career opportunities. This module introduces students to coding and programming, offering both visual and text-based programming lessons.",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
      },
      img: progImg3,
    },
  ];
  const values = [
    {
      title: "Our Mission",
      article:
        " To empower students in rural Ghana with essential digital skills, fostering a love for technology and preparing them for the future. ",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
      },
      img: progImg1,
    },
    {
      title: "Our Vission",
      article:
        " A digitally inclusive society where every child has access to technology and coding education, regardless of their location or background.",
      link: "More details",
      icons: {
        arrowIcon: <IoArrowForward className="text-red-700" />,
        whoweareIcon: whoweare,
      },
      img: progImg2,
    },
  ];

  const blogData = [
    {
      img: progImg1,
      author: "consolegh_",
      title:
        "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
      date: "May 26, 2024",
      icons: {
        authorIcon: <MdAccountCircle />,
        dateIcon: <MdTimer />,
      },
    },
    {
      img: progImg2,
      author: "consolegh_",
      title:
        "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
      date: "May 26, 2024",
      icons: {
        authorIcon: <MdAccountCircle />,
        dateIcon: <MdTimer />,
      },
    },
    {
      img: progImg3,
      author: "consolegh_",
      title:
        "DTI Offers a Variety of Programmes Designed to meet the needs of various industries",
      date: "May 26, 2024",
      icons: {
        authorIcon: <MdAccountCircle />,
        dateIcon: <MdTimer />,
      },
    },
  ];

  const stats = [
    {
      number : '261',
      icon: <MdAccountCircle/>,
      title: 'Districts'
    },
    {
      number : '16',
      icon: <MdAccountCircle/>,
      title: 'Regional'
    },
    {
      number : 'Over 6000',
      icon: <MdAccountCircle/>,
      title: 'Communities'
    },
  ]

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === programmesData.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );
  //   return () => {
  //       resetTimeout();
  //   };
  // }, [index]);

  return (
    <main className=" ">
      {/* stats */}
      <section className="m-8">
        <h1 className="text-center text-2xl uppercase m-12 font-semibold">we are connecting</h1>
        <div className="flex items-center  gap-4 justify-center">
              {
                stats.map((val, index) => {
                  const { number , icon , title} = val ;
                  return (
                    <div className="flex items-center p-6 rounded w-[30%] shadow-md bg-[white]  gap-4" key={index}>
                      <span className="text-[50px] ">{icon}</span>
                      <div className="flex flex-col">
                        <p className="text-[35px] font-semibold text-[#faaf40]">{number}</p>
                        <p className="text-[gray]">{title}</p>
                      </div>
                    </div>
                  )
                })
              }
        </div>
      </section>

      {/* what we offer */}
      <section className="mt-[8rem]">
        <div className="mx- ">
          <h1 className="text-center uppercase text-[24px] font-bold">what we offer</h1>
          <div className="mt-14 mb-[6rem] lg:flex  xl:flex  border justify-center items-center gap-8 ">
            {offer.map((val, index) => {
              const { title, article, link, icons } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col justify-  items-center gap-2 bg-[white] h-[50vh]  shadow-md rounded-md mb-4 hover:scale-105   duration-700  lg:w-[30%]  xl:w-[28%] h-[50%] p-4"
                >
                  <div className="mb-6">
                    <img src={icons.whoweareIcon} alt="" />
                  </div>
                  <h2 className="font-semibold text-nowrap">{title}</h2>
                  <article className=" text-[16px] text-[gray] text-center">{article}</article>
                  <div className="bg-[#faaf40] p-2 rounded flex items-center gap-4 mt-2 font-semibold">
                    {link}
                    {icons.arrowIcon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* who we are */}
      <section className=" my-[5rem] ">
        <div className="flex items-center justify-center ">
          <div className=" flex flex-col items-center justify-center lg:flex-row  gap-2 bg-[whitesmoke] ">
            <div className="lg:w-[48%]  gap-4 flex  justify-center flex-col items-center  lg:flex-row ">
              
              <div className=" w-full flex justify-between flex-col gap-8 ">
                <div className="">
                  <h1 className="uppercase font-bold text-red-700 text-3xl ">
                    who we are
                  </h1>
                  <hr className="w-[20%] rounded mt-6 h-1 bg-red-700" />
                </div>
                <article className=" mr-14 text-[16px]">
                  Our mission is to become the leading industrial job training
                  and prototype center in West Africa to transform the
                  livelihoods of young people in TVET. DTI firmly believes that
                  education is the cornerstone of creating opportunities for
                  individuals and communities. Our commitment to providing
                  exceptional technical and vocational training is geared
                  towards equipping our students with the necessary skills and
                  knowledge to thrive in today's fast-paced and highly
                  competitive job market.
                </article>

                <div className="flex items-center gap-4 font-semibold ">
                  <h2 className="text-[20px] ">About us </h2>
                  <IoArrowForward className="text-red-700" />
                </div>
              </div>
            </div>

            <figure className="lg: flex justify-end w-[40%] p-  ">
              <img className="lg: w-[100%]   rounded-" src={progImg1} alt="" />
            </figure>
          </div>
        </div>
      </section>

      {/* our values */}
      <section className="my-[5rem] mx- bg-white">
        <div className="mx-12">
          <div className="flex  justify-between mx-10 h-[60vh] items-center">
            <div className="flex  flex-col gap-2  w-[30%] ">
              <div className="uppercase font-semibold flex mb-3  flex-col gap-3">
                <h2 className="text-[30px]">our values</h2>
                <hr className="text-4xl w-[20%] rounded mt-4 h-1 bg-red-700" />
              </div>
              <div className="mb-">
                <article className="leading- text-[14px]">
                We believe every child and youth, regardless of their background, deserves access to quality digital education.
                 Our programs are designed to be inclusive and accessible to all students in rural communities to aid their participation in the Digital world.
                </article>
              </div>
    
            </div>
             
             
           <div className="w-[60%]">
           <div className="flex justify-between items-center gap-4 ">
            {values.map((val, index) => {
              const { title, article, link, icons } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col  items-center gap-4 bg-[whitesmoke] p-  shadow-md rounded-md hover:scale-105   duration-700   xl:w-[%] p-6"
                >
                  <div className="mb-">
                    <img src={icons.whoweareIcon} alt="" />
                  </div>
                  <h2 className="font-semibold text-nowrap">{title}</h2>
                  <article className=" text-[14px] text-[gray] text-center">{article}</article>
                </div>
              );
            })}
          </div>
            </div>         
          </div>
        </div>
      </section>

      {/* cards */}
      <section className="">
        <div className="mx- ">
          <div className="mt-14 mb-[6rem] lg:flex  xl:flex justify-center gap-8 ">
            {offer.map((val, index) => {
              const { title, article, link, icons } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col  text-white items-center justify-center gap-2 bg-[#262261] p-  shadow-sm mb-4 lg:w-[30%] h-[60%] xl:w-[28%] p-8"
                >
                  <div className="mb-6">
                    <img src={icons.whoweareIcon} alt="" />
                  </div>
                  <h2 className="font-semibold text-nowrap">{title}</h2>
                  <article className=" text-center">{article}</article>
                  <div className="bg-[#faaf40] p-2 rounded flex items-center gap-4 mt-2 font-semibold">
                    {link}
                    {icons.arrowIcon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* our activities*/}
      <section className="">
        <div className="mx-10  my-14">
          <h1 className="text-5xl text-center ">Our Actitvites</h1>
          <div className="mt-14 mb-[6rem] lg:flex  xl:flex justify-center gap-6">
            {offer.map((val, index) => {
              const { title, article, link, icon, img } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col  items-center gap-2 bg-[#262261] text-white   shadow-md hover:scale-105   duration-700  lg:w-[30%] xl:w-[30%] p-"
                >
                  <img src={img} alt="" />
                  <div className=" flex flex-col items-center gap- px-4 ">
                    <h2 className=" text-wrap text-center text- font-semibold">
                      {title}
                    </h2>
                    <article className="leading text-center">{article}</article>
                    <div className="bg-[#faaf40] py-3 px-4 rounded-[1.8rem] flex items-center gap-4 m-4 ">
                      {link}
                      {icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* blog */}
      {/* <section className="">
        <div className="my-12 mx bg-[#111]">
          <div className="flex flex-col justify-center gap- items-center ">
            <iv className=" pt-12 lg:">
              <h2 className=" mb-14 text-center font-bold text-[24px] text-[#EE4036] lg:text-[48px]">
                Blog
              </h2>
            </iv>

            <div className=" flex items-center  justify-center">
              <div className=" flex items-center text-white justify-center mb-14 gap-8 ">
                {blogData.map((val, index) => {
                  const { img, title, author, date, icons } = val;
                  return (
                    <div
                      key={index}
                      className="w-[28%]  flex flex-col justify-center items-center "
                    >
                      <img src={img} className="w-[%]" alt="" />
                      <div className="my-8 ">
                        <div className="flex justify-start items-center text-[#faaf40] gap-4 py-2">
                          <span className="flex items-center gap-2 ">
                            {icons.authorIcon} {author}
                          </span>
                          <span className="flex items-center gap-2 ">
                            {icons.dateIcon} {date}
                          </span>
                        </div>
                        <div className="text-[gray]">
                          <h2 className="  text-wrap">{title}</h2>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* partners */}
      <section className="">
        <div className="mx-8">
          <div className="mt-14 lg:flex items-center  gap-6 justify-center my-14">
            <div className="flex  flex-col gap-6  lg:w-[40%] ">
              <div className="uppercase font-semibold flex mb-3  flex-col gap-3">
                <h2 className="text-[30px]">INDUSTRY PARTNERS</h2>
                <hr className="text-4xl w-[20%] rounded mt-4 h-1 bg-red-700" />
              </div>
              <div className="mb-">
                <article className="leading- text-[16px]">
                  The DTI Edge helps our learners to build the skills and
                  character necessary for an effective mindset shift for a
                  continent limited by negative mindset. Our learners continue
                  to make a difference in the world through their work.
                </article>
              </div>
              <div className="flex items-center font-semibold gap-4">
                <span>Read More </span>
                <IoArrowForward className="text-[#c4002c]" />
              </div>
            </div>

            <div className="lg:w-[52%]">
              <div className="flex flex-wrap items-center justify-around my-[4rem] gap-4">
                <img className="w-[30%] lg:w-[40%] border-2  rounded-md" src={digitalSch} alt="" />
                <img className="w-[30%] lg:w-[40%] border-2  rounded-md" src={raspberry} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#ffc12d] ">
           <div className="flex justify-center items-center  h-80  mx-8">
           <div className=" flex flex-col items-center gap-8 ">
                  <h2 className="text-[28px] text-center text-[#c4002c] font-bold">ACQUIRE SKILLS FOR A CHANGING WORLD</h2>

                  <button className="bg-[#c4002c] font-semibold text-white rounded-md py-4 px-8 ">Apply Now</button>
              </div>
           </div>
      </section> */}
    </main>
  );
};

export default Content;
