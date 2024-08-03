import React from "react";
import digitalSch from "../assets/partners/digital.jpeg";
import raspberry from "../assets/partners/raspberry.jpeg";

import { MdForward } from "react-icons/md";

const Partners = () => {
  return (
    <div>
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
                  Our work is supported by a network of dedication partners who share our vision of a digitally inclusive society. We are open to more collabration to increase our impact creation. We are proud to collaborate with the following organizations.
                </article>
              </div>
              <div className="flex items-center font-semibold gap-4">
                <span>Read More </span>
                <MdForward className="text-[#c4002c]" />
              </div>
            </div>

            <div className="lg:w-[52%]">
              <div className="flex flex-wrap items-center justify-around my-[4rem] gap-4">
                <img
                  className="w-[30%] lg:w-[40%] border-2  rounded-md"
                  src={digitalSch}
                  alt=""
                />
                <img
                  className="w-[30%] lg:w-[40%] border-2  rounded-md"
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
