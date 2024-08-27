import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

import { SearchField } from ".";

export default function SearchBar() {
  return (
    <section>
      <div className=" border h-12   flex">
        <SearchField
          title="destinations"
          iconLeft={<HiLocationMarker color="#6B7280" size={20} />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
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
          textStyle={`[#1b1b1b]`}
          iconLeft={<FaCalendar color="#6B7280" />}
          iconRight={<MdKeyboardArrowDown color="#6B7280" size={22} />}
        />

        <button className="h-full px-4 flex items-center text-white bg-[#1A56DB] space-x-2">
          <MdOutlineSearch size={22} />

          <span> Search</span>
        </button>
      </div>
    </section>
  );
}
