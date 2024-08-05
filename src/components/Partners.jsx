import React from "react";
import digitalSch from "../assets/partners/digital.jpeg";
import raspberry from "../assets/partners/raspberry.jpeg";

import { MdForward } from "react-icons/md";

const Partners = () => {
  return (
    <div>
      <section className="">
        <div className="xl:mx-8">
          <div className="flex flex-col gap- mt-14 lg:flex-row items-center  gap- justify-center xl:my-14">
            <div className="flex items-center  flex-col gap-6  lg:w-[40%] xl:items-start">
              <div className="uppercase font-semibold flex mb-3  flex-col gap-3">
                <h2 className="xl:text-[30px]">INDUSTRY PARTNERS</h2>
                <hr className="text-4xl w-[20%] hidden rounded mt-4 h-1 bg-red-700 xl:block" />
              </div>
              
                <article className="text-center text-[16px] xl:text-start">
                  Our work is supported by a network of dedication partners who share our vision of a digitally inclusive society. We are open to more collabration to increase our impact creation. We are proud to collaborate with the following organizations.
                </article>
              
              <div className="flex items-center font-semibold gap-4">
                <span>Read More </span>
                <MdForward className="text-[#c4002c]" />
              </div>
            </div>

            <div className="lg:w-[52%]">
              <div className="flex flex-col gap-8 flex-wrap items-center justify-around xl:flex-row my-[4rem] gap-4">
                <img
                  className="w-[80%] lg:w-[40%]   "
                  src={digitalSch}
                  alt=""
                />
                <img
                  className="w-[80%] lg:w-[40%] "
                  src={raspberry}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
