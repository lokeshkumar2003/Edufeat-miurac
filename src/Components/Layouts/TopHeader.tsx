import React from "react";
import whatsapp from "../../Assets/whatsapp.svg";
import person from "../../Assets/Person.svg";
import { Link } from "react-router-dom";
export default function TopHeader() {
  return (
    <div className="h-[8.5] bg-gray py-3 md:py-2 px-4 flex flex-start sticky ml-auto">
      <div className="items-center md:flex-start flex flex-start w-[85%] pl-7 gap-2 ">
        <img src={whatsapp} alt="whatsapp"></img>
        <div className="font-semibold text-green 2xl:hidden">
          WhatsApp for any query : +91 7082686818
        </div>
      </div>
      <Link to="/tutor">
      <div>
          <div className="flex items-center flex-end gap-2 ">
            <img src={person} alt="person" className="pt-2 w-[20px] h-[20px]"></img>
            <div className="font-semibold text-white pt-2 2xl:hidden ">Become a Tutor</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
