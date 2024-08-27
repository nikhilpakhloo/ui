import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

import { SearchField } from ".";

export default function SearchBar() {
  return (
    <section>
      <div className="md:h-12 md:flex md:space-y-0 space-y-4 ">
        <SearchField
          title="destinations"
          iconLeft={<HiLocationMarker color="#6B7280" size={20} />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
          bg={true}
        />
        <SearchField
          title="Check in"
          iconLeft={<FaCalendar color="#6B7280" />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
        />
        <SearchField
          title="Check out"
          iconLeft={<FaCalendar color="#6B7280" />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
        />
        <SearchField
          title="Add guests"
          textStyle={`text-[#1b1b1b]`}
          iconLeft={<FaCalendar color="#6B7280" />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
        />

        <button className="h-full px-4 w-full flex justify-center items-center text-white bg-[#1A56DB] space-x-2 py-4">
          <MdOutlineSearch size={22} />

          <span className=""> Search</span>
        </button>
      </div>
    </section>
  );
}
