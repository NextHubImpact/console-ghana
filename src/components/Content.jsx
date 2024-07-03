import React, {useState, useEffect, useRef} from "react";
import { IoArrowForward } from "react-icons/io5";

import homeSide from "../assets/main/home-side.jpg";
import campusImg from "../assets/homepage/slider/slider-3.jpg";
import progImg1 from "../assets/main/aca-des.jpg";
import progImg2 from "../assets/main/aca-en.jpg";
import progImg3 from "../assets/main/aca-weld.jpg";

import htu from "../assets/partners/tech.png"
import accra from '../assets/partners/Accra.png'
import asco from '../assets/partners/asco.jpg'
import knust from '../assets/partners/knust.png'
import techlabs from '../assets/partners/techlabs.jpg'
import asase from '../assets/partners/asase.jpg'

const Content = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null)
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }


  const highlightCard = [
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icon: <IoArrowForward className="text-red-700" />,
    },
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icon: <IoArrowForward className="text-red-700" />,
    },
    {
      title: "WHERE GREAT IDEAS TAKE FLIGHT",
      article:
        "DTI offers a variety of programmes designed to meet the needs of various industries. Engineering, manufacturing, construction, and information technology are among the technical and vocational training we provide.",
      link: "More details",
      icon: <IoArrowForward className="text-red-700" />,
    },
  ];

  const programmesData = [
    {
      title: "Precision Welding & Fabrication",
      article:
        "Our Precision Fabrication programme haas been designed to meet the needs of the welding and fabrication industry by providing world-class training in line with global standards.",
      bgImg: progImg1,
    },
    {
      title: "Precision Welding & Fabrication",
      article:
        "Our Precision Fabrication programme haas been designed to meet the needs of the welding and fabrication industry by providing world-class training in line with global standards.",
      bgImg: progImg2,
    },
    {
      title: "Precision Welding & Fabrication",
      article:
        "Our Precision Fabrication programme haas been designed to meet the needs of the welding and fabrication industry by providing world-class training in line with global standards.",
      bgImg: progImg3,
    },
  ];

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === programmesData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
        resetTimeout();
    };
  }, [index]);

  return (
    <main className=" ">
      <section className=" ">
      <div className="mx-8 my-14 flex flex-col justify-between lg:flex-row items-center justify-between gap-2">
      <div className="lg:w-[45%] justify-between gap-4 flex flex-col items-center mt-14 lg:flex-row ">
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
            <h2 className="text-[20px] mb-4">About us </h2>
            <IoArrowForward className="text-red-700" />
          </div>
        </div>
       </div>

        <div className="lg:w-[45%] ">
          <img className="lg: object-contain" src={homeSide} alt="" />
        </div>
      </div>
      </section>

       {/* campus tour */}
      <section className="">
      <div className="my-14 mx-8">
      <div className="  flex flex-col justify-between  mb-5 lg:flex-row items-center lg:py-14 bg-yellow-500">
          <div className="w-full lg:pl-4">
            <img className=" h-[50vh] object-cover md: w-full lg:h-full" src={campusImg} alt="" />
          </div>
          <div className="w-full bg-yellow-500 px-8 h-60  flex flex-col gap-4  justify-center ">
            <h2 className="uppercase font-bold text-[20px] text-red-700">
              tour our campus
            </h2>
            <IoArrowForward className="text-red-700" />
          </div>
        </div>
      </div>
      </section>

       {/* cards */}
      <section className="">
       <div className="mx-8">
       <div className="mt-14 mb-[6rem]  lg:flex justify-between gap-2 ">
          {highlightCard.map((val, index) => {
            const { title, article, link, icon } = val;
            return (
              <div key={index} className=" flex flex-col  items-center gap-2 bg-[#f1f1f1] p-8 rounded-[1rem] shadow-sm mb-4 border-4  border-yellow-500 lg:w-[32%] ">
                <h2 className="font-semibold text-nowrap">{title}</h2>
                <article className="leading-loose text-center">
                  {article}
                </article>
                <div className="flex items-center gap-4 mt-2 font-semibold">
                  {link}
                  {icon}
                </div>
              </div>
            );
          })}
        </div>
       </div>
      </section>
      
      {/* programmes */}
      <section className="">
       <div className="mx-8">
       <div className="mt-14  flex flex-col gap-8  justify-between ">
          <div className="flex  flex-col gap-8  ">
            <div className="uppercase font-bold flex  flex-col gap-4">
              <h2 className="text-5xl">
                dti <br /> programmes
              </h2>
              <IoArrowForward className="text-red-700 " />
            </div>
            <div className="mb-12">
              <article className="leading-6 text-[20px]">
                Our approach to teaching and learning is underpinned by our
                unique programmes for TVET training.
              </article>
            </div>
          </div>

            <div className="slideshow bg-[#fefefe]  ">
              <div
                className="slideshowSlider bg-green-400  "
                style={{ transform: `translate3d(${-index * 100}%, 0, 0) ` }}
              >
                {programmesData.map((data, index) => (
                  <div className="slide "  key={index}>
                     <div
                      style={{
                        backgroundImage: `url(${data.bgImg})`,
                         backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // gap: '4rem',
                        padding: '5px',
                    }}
                    className="h-[55vh]  "
                     >
                       <div className="  text-[#fff] p-4 bg-inherit  ">
                       <h2 className="text-[18px] text-wrap">{data.title}</h2>
                         <p className="text-[14px] text-wrap leading-8  ">{data.article}</p>
                       </div>
                     </div>
                  </div>
                ))}
              </div>

              <div className="slideshowDots my-4">
                {programmesData.map((_, idx) => (
                  <div
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                  }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
       </div>
      </section>
      
      {/* projects */}
      <section className="bg-[#ffc12d]">
         <div className="my-12 mx-8">
         <div className="flex flex-col gap-[6rem] justify-between">
            <div className=" pt-12 lg:">
                <h2 className=" mb-6 uppercase font-bold text-[24px] text-red-700 lg:text-[48px]">
                  community innovation programme</h2>
                 <div className="flex gap-4 items-center">
                 <p className="font-bold">See all projects</p>
                 <IoArrowForward className="hover:ml-4"/>
                 </div>
                <hr className="text-4xl w-[20%] rounded mt-4 h-1 bg-red-700"/>
            </div>


            <div className="">
            <div className="slideshow  ">
              <div
                className="slideshowSlider "
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {programmesData.map((data, index) => (
                  <div className='slide '  key={index}>
                     <div
                      style={{
                        backgroundImage: `url(${data.bgImg})`,
                         backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // gap: '4rem',
                        padding: '5px',
                    }}
                    className="h-[55vh] lg:h-[90vh]  xl:w-full"
                     >
                       <div className="  text-[#fff] p-4 bg-inherit  ">
                       <h2 className="text-[18px] text-wrap">{data.title}</h2>
                         <p className="text-[14px] text-wrap leading-8  ">{data.article}</p>
                       </div>
                     </div>
                  </div>
                ))}
              </div>

              <div className="slideshowDots mb-14 ">
                {programmesData.map((_, idx) => (
                  <div
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                  }}
                  ></div>
                ))}
              </div>
            </div>
            </div>
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

      <section className="bg-[#ffc12d] ">
           <div className="flex justify-center items-center  h-80  mx-8">
           <div className=" flex flex-col items-center gap-8 ">
                  <h2 className="text-[28px] text-center text-[#c4002c] font-bold">ACQUIRE SKILLS FOR A CHANGING WORLD</h2>

                  <button className="bg-[#c4002c] font-semibold text-white rounded-md py-4 px-8 ">Apply Now</button>
              </div>
           </div>
      </section>
    </main>
  );
};

export default Content;
