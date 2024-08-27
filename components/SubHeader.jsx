import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

export default function SubHeader() {
  return (
    <section className="flex  justify-between items-center px-2 lg:px-6 md:py-2.5 py-1">
      <div className="flex items-center    ">
        <Link
          href={`/`}
          className="font-bold text-[17px] sm:text-xl text-[#1B1B1B] text-nowrap"
        >
          Amazon Fashion
        </Link>
        <div className="flex md:space-x-10 space-x-4 items-center">
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md  font-medium  ml-2 sm:ml-10  "
          >
            Home
          </Link>
          <Link href={`/`} className="text-[#1b1b1b] text-md  font-medium">
            Company
          </Link>
          <Link href={`/`} className="text-[#1b1b1b] text-md  font-medium">
            Team
          </Link>
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md  font-medium md:block hidden"
          >
            Features
          </Link>
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md font-medium md:block hidden"
          >
            Marketplace
          </Link>
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md  font-medium lg:block hidden"
          >
            Resources
          </Link>
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md  font-medium lg:block hidden"
          >
            Career
          </Link>
          <Link
            href={`/`}
            className="text-[#1b1b1b] text-md  font-medium lg:block hidden"
          >
            Forum
          </Link>
        </div>
        <HiDotsHorizontal className="lg:hidden ml-1" />
      </div>
      <div className="pl-14">
        <hr className="h-6 w-[0.5px] bg-gray-300" />

      </div>
      <div className="flex space-x-4">
        <p className="text-sm">Become a <span className="underline font-bold ">Zola vendor</span></p>
        <p className="text-sm">Become a <span className="underline font-bold ">Zola vendor</span></p>

      </div>
    </section>
  );
}
