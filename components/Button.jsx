import React from "react";
import { MdLock } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";



export default function Button() {
  return (
    <button className="flex items-center space-x-2 md:px-5 px-1 py-[10px]  bg-[#1A56DB]">
      <div className="flex items-center space-x-[2px]  ">
      <MdLock className="md:block hidden" />


        <h1 className="md:text-[16px] text-[12px] font-semibold text-nowrap">Add post</h1>
      </div>
      <div>

      <CgArrowRight  size={22}  className="md:block hidden"/>

      </div>
    </button>
  );
}
