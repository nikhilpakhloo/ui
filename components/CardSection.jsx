import React from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Cards } from ".";
import data from "@/constants/data";

export default function CardSection() {
  return (
    <section className="my-14 md:px-20 px:2  ">
      <div className="flex flex-col items-start 2xl:items-center ">
        <h1 className="text-3xl text-[#1b1b1b] font-bold">
          Worldwide ecommerce success stories
        </h1>
        <div className="flex items-center pl-2 leading-8">
          <p className="text-md text-[#1b1b1b]">
            Politics, Power and Personality.{" "}
            <span className="underline underline-offset-2">Read more </span>{" "}
          </p>

          <RiArrowRightDoubleFill />
        </div>
      </div>
      <div className="xl:flex justify-center w-full md:space-x-14 xl:mt-12 mt-8 ">
        <div className="w-auto flex flex-col space-y-8 ">
          <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-y-24 md:gap-y-14 gap-y-5">
              {data.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
    
        <div className=" mx-auto  flex items-start justify-center xl:mt-0 mt-8  ">
          <div className="flex flex-col border w-[300px]    items-center pb-6 ">
            <div className="bg-black w-full py-3">
              <h1 className="  text-white text-center font-bold ">
                Join the community 👋
              </h1>
            </div>
            <div className="p-5 space-y-4">
              <h1 className="text-[#1b1b1b] text-2xl font-bold text-center">
                To know everything about Shopify
              </h1>
              <p className="text-gray-500 text-start text-lg pl-5">
                Connect, share and engage with community nd build relationship.
              </p>
            </div>
            <div className="flex flex-col w-full px-8 space-y-2">
              <button className="px-12 py-2 bg-[#E90000] ">
                <span className="text-white font-bold">Subscribe for $1</span>
              </button>
              <button className="px-12 py-2 bg-[#E90000] ">
                <span className="text-white font-bold">Subscribe for $1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
     
    
    </section>
  );
}
