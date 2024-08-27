import Link from "next/link";
import React from "react";
import { Button } from ".";
import { RxAvatar } from "react-icons/rx";
import { FaBell } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCaretDownSharp } from "react-icons/io5";
import { GiFlatPlatform } from "react-icons/gi";





const Header = () => {
  return (
    <header>
      <nav className="bg-[#E90000] px-2 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto text-white ">
          <div className="flex items-center space-x-2 sm:space-x-3 ">
          <RxHamburgerMenu   size={20} />


            <Link href="/">
              <h1 className="text-lg md:text-2xl  font-bold text-nowrap">Shop Digest</h1>
            </Link>

            <hr className="w-[1px] h-[22px] bg-[#d1d5db] " />
            <div className="flex items-center space-x-1">
            <GiFlatPlatform size={15} className="md:hidden block" />

              <h2 className="text-sm tracking-widest md:block hidden">Platform</h2>
              <IoCaretDownSharp size={15}  />

            </div>
          </div>
          <div className="xl:flex hidden space-x-8 text-lg">
            <Link href={`/`}>Apps</Link>
            <Link href={`/`}>Themes</Link>
            <Link href={`/`}>Agencies</Link>
            <Link href={`/`}>Jobs</Link>
            <Link href={`/`}>Discounts</Link>
          </div>
          <div className="flex items-center sm:space-x-3 space-x-2">
            <div className="flex items-center sm:space-x-2 space-x-1">
              <FaBell color="white" size={20}  className="lg:block hidden"/>

              <MdOutlineSearch size={22} />
              <Button />
            </div>

            <div className="flex items-center space-x-1 md:ml-4">
              <RxAvatar color="white" size={35} />

              <h2 className="lg:block hidden">Login</h2>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
