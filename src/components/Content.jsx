import React, { useState, useEffect, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import CountUp from "react-countup";

import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import whoweare from "../assets/img-icons/whoweare.webp";

import { MdAccountCircle, MdTimer } from "react-icons/md";
import Partners from "./Partners";

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
      article:
        " This module is designed to equip students with the essential skills and knowledge needed to navigate the digital world confidently and safely. We focus in building students strong skills in basic computer operations, understanding the internet, and recognizing the importance of online safety.",
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
      number: "261",
      icon: <MdAccountCircle />,
      title: "Districts",
    },
    {
      number: "16",
      icon: <MdAccountCircle />,
      title: "Regions",
    },
    {
      number: "6000",
      icon: <MdAccountCircle />,
      title: "Communities",
    },
  ];

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
    <main className="mx-2 ">
      {/* stats */}
      <section className="xl:m-8">
        <h1 className=" text-[16px] text-center xl:text-2xl uppercase m-12 font-semibold">
          we are connecting
        </h1>
        <div className="flex flex-col  items-center  gap-4 justify-center xl:flex-row">
          {stats.map((val, index) => {
            const { number, icon, title } = val;
            return (
              <div
                className="flex w-[100%] gap-6 items-center p-6 rounded xl:w-[30%] shadow-md bg-[white]  gap-4"
                key={index}
              >
                <span className="text-[50px] ">{icon}</span>
                <div className="flex flex-col">
                  <CountUp
                    start={10}
                    end={number}
                    duration={3}
                    className="text-[35px] font-semibold text-[#faaf40]"
                  />
                  {/* <p >{number}</p> */}
                  <p className="text-[gray]">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* what we offer */}
      <section className="mt-[4rem]">
        <div className="mx- ">
          <h1 className="text-center uppercase text-[24px] font-bold">
            what we offer
          </h1>
          <div className="mt-14 mb-[6rem] lg:flex  xl:flex justify-center items-center gap-8 ">
            {offer.map((val, index) => {
              const { title, article, link, icons } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col justify-  items-center gap-2 bg-[white] h-[50vh] rounded-md mb-4 hover:shadow-md   duration-700  lg:w-[30%]  xl:w-[28%] h-[50%] p-4"
                >
                  <div className="mb-6">
                    <img src={icons.whoweareIcon} alt="" />
                  </div>
                  <h2 className="font-semibold text-nowrap">{title}</h2>
                  <article className="text-[14px] xl:text-[16px] text-[gray] text-center">
                    {article}
                  </article>
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
      <section className=" mt-[5rem] ">
        <div className="flex items-center justify-between ">
          <div className=" flex flex-col items-center justify-center lg:flex-row   gap-2 bg-[whitesmoke] ">
            <div className="xl:w-[48%]   gap-4 flex  justify-center flex-col items-center  xl:flex-row ">
              <div className=" w-full flex items-center justify-between  flex-col gap-8 xl:items-start text-center">
                <div className="">
                  <h1 className="text-center uppercase font-bold text-red-700 text-3xl ">
                    who we are
                  </h1>
                  <hr className="hidden xl:block w-[20%] text-center rounded mt-6 h-1 bg-red-700" />
                </div>
                <article className=" xl:pr-4 text-[14px] xl:text-[16px] xl:text-start ">
                  Rural Code Camp is a NON PROFIT ORGANISATION dedicated in
                  bridging the digital divide by empowering students in remote
                  villages across Ghana with essential coding and computer
                  skills. We are on a mission to connect the unconnected.
                </article>

                <div className="flex items-center gap-4 font-semibold ">
                  <h2 className="text-[20px] ">About us </h2>
                  <IoArrowForward className="text-red-700" />
                </div>
              </div>
            </div>

            <figure className="lg: flex justify-end xl:w-[40%] p-  ">
              <img className="lg: w-[100%]   rounded-" src={progImg1} alt="" />
            </figure>
          </div>
        </div>
      </section>

      {/* our values */}
      <section className="my-[4rem] py-8 mx- bg-white">
        <div className="mt-4 xl:mx-10">
          <div className="flex flex-col gap-8 xl:flex-row justify-between xl:mx-10 xl:h-[60vh] items-center">
            <div className="flex  text-center flex-col gap-2  xl:w-[35%] xl:text-start ">
              <div className="uppercase font-semibold flex mb-3  flex-col gap-3">
                <h2 className="text-[30px]">our values</h2>
                <hr className="text-4xl hidden w-[20%] rounded mt-4 h-1 bg-red-700 xl:block" />
              </div>
              <div className="mb-">
                <article className="leading- text-[14px]">
                  We believe every child and youth, regardless of their
                  background, deserves access to quality digital education. Our
                  programs are designed to be inclusive and accessible to all
                  students in rural communities to aid their participation in
                  the Digital world.
                </article>
              </div>
            </div>

            <div className="xl:w-[65%]">
              <div className="flex flex-col xl:flex-row justify-between items-center gap-4 ">
                {values.map((val, index) => {
                  const { title, article, link, icons } = val;
                  return (
                    <div
                      key={index}
                      className=" flex flex-col  items-center gap-4 bg-[whitesmoke] p-  shadow-m rounded-md hover:shadow-md   duration-700   xl:w-[%] p-6"
                    >
                      <div className="mb-">
                        <img src={icons.whoweareIcon} alt="" />
                      </div>
                      <h2 className="font-semibold text-nowrap">{title}</h2>
                      <article className=" text-[14px] text-[gray] text-center">
                        {article}
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our activities*/}
      <section className="">
        <div className="xl:mx-8  my-14">
          <h1 className="text-3xl uppercase font-semibold text-center ">
            Our Actitvites
          </h1>

          <div className=" flex flex-col gap-4 mt-14 mb-[6rem] lg:flex  xl:flex-row justify-center gap-4">
            {offer.map((val, index) => {
              const { title, article, link, icon, img } = val;
              return (
                <div
                  key={index}
                  className=" flex flex-col  justify-between items-center gap-4 bg-[#262261] text-white   shadow-md    duration-700  lg:w-[30%] xl:w-[30%] p-"
                >
                  <img src={img} alt="" />
                  <div className=" flex flex-col items-center gap- px-4 ">
                    <h2 className=" text-wrap text-center text- font-semibold">
                      {title}
                    </h2>
                    <article className="text-[14px] text-center">
                      {article}
                    </article>
                    <div className="bg-[#faaf40] py-2 px-3 rounded-md flex items-center gap-4 m-4 ">
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

      {/* partners */}
      <Partners />
    </main>
  );
};

export default Content;
