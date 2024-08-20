import React from "react";
import { IoArrowForward } from "react-icons/io5";
import whoweare from "../assets/img-icons/whoweare.webp";
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import Partners from "../components/Partners";
import Team from "../components/Team";

const About = () => {
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

  return (
    <div className="mx-2">
      {/* who we are */}
      {/* <section className=" pt-[8rem] ">
        <div className="flex items-center justify-center  ">
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

            <figure className="lg: flex justify-end w-[40%] p-  ">
              <img className="lg: w-[100%]   rounded-" src={progImg1} alt="" />
            </figure>
          </div>
        </div>
      </section> */}
      {/*       
        <section className=" xl:mt-[2rem] mt-[2rem] pt-[4rem] ">
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
                Rural Code Camp is a NON PROFIT ORGANISATION dedicated in bridging the digital divide by empowering students in remote villages across Ghana with essential coding and computer skills. We are on a mission to connect the unconnected.
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
      </section> */}

      {/* what we offer */}
      {/* <section className="mt-[8rem]">
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
                  className=" flex flex-col justify-  items-center gap-2 bg-[white] h-[50vh]  shadow-md rounded-md mb-4 hover:scale-105   duration-700  lg:w-[30%]  xl:w-[28%] h-[50%] p-4"
                >
                  <div className="mb-6">
                    <img src={icons.whoweareIcon} alt="" />
                  </div>
                  <h2 className="font-semibold text-nowrap">{title}</h2>
                  <article className=" text-[16px] text-[gray] text-center">
                    {article}
                  </article>             
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="pt-[8rem] xl:pt-[10rem]">
        <div className=" flex items-center justify-center  ">
          <div className=" flex flex-col items-center xl:w-[88%] justify-between lg:flex-row  gap-4 bg-[whitesmoke] ">
            <figure className="w-full flex flex-col justify-center  xl:w-[45%] p-  ">
              <img
                className="lg: w-[100%] h-[30vh]  rounded-"
                src={progImg1}
                alt=""
              />
              <img
                className="lg: w-[100%] h-[30vh]  rounded-"
                src={progImg1}
                alt=""
              />
            </figure>

            <div className="lg:w-[55%] ml- gap-8 flex  justify-center flex-col items-center  lg:flex-row ">
              <div className=" w-full flex justify-between flex-col gap-4 xl:p-4">
                <div className="">
                  <h1 className="uppercase text-center pt- font-bold text-red-700 text-3xl xl:text-start ">
                    our story
                  </h1>
                  <hr className="hidden w-[20%] rounded mt-4 h-1 bg-red-700 xl:block" />
                </div>
                <article className=" xl:mr-14 xl:text-[16px]">
                  <p className="">
                    {" "}
                    In many rural communities across Ghana, access to quality
                    education, particularly in digital literacy and technology,
                    remains a significant challenge. While the world becomes
                    increasingly digital, countless children in these areas are
                    left behind, with limited or no exposure to the skills they
                    need to succeed in the modern world. This digital divide not
                    only hinders individual growth but also restricts the
                    potential of entire communities.
                  </p>
<br />
                  <p>
                    {" "}
                    Rural Code Camp was born out of a vision to bridge this gap.
                    We saw the need to bring technology education directly to
                    the doorsteps of these underserved communities. Our mission
                    is to empower young minds in rural Ghana by providing them
                    with the skills and knowledge to thrive in a digital future.
                    We believe that every child, regardless of where they live,
                    should have the opportunity to learn, innovate, and create a
                    better future for themselves and their communities.
                  </p>
<br />
                  <p>
                    At Rural Code Camp, we are committed to{" "}
                    <span className="font-bold text-red-700">
                      "Connecting the Unconnected"{" "}
                    </span>{" "}
                    by ensuring that every young person, no matter how remote
                    their location, has the chance to participate in the digital
                    world. Our story is one of hope, empowerment, and a
                    steadfast belief that education is the key to unlocking the
                    potential of Ghana’s rural youth.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      {/* partners */}
      <Partners />
    </div>
  );
};

export default About;
