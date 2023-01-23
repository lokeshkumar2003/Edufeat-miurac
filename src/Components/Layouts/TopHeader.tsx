import React from "react";
import whatsapp from "../../Assets/whatsapp.svg";
import person from "../../Assets/Person.svg";
import { Link } from "react-router-dom";
import Content from "./Content";
export default function TopHeader() {
  return (
    <div className=" bg-gray">
      <Content>
        <div className="h-[8.5] py-3 md:py-2  flex flex-start sticky ">
          <div className="items-center md:flex-start flex flex-start w-[85%] gap-2 ">
            <img src={whatsapp} alt="whatsapp"></img>
            <div className="font-semibold text-green 2xl:hidden ">
             <span className="hidden md:visible">WhatsApp for any query :</span>  +91 7082686818
            </div>
          </div>
          <Link to="/tutor">
            <div>
              <div className="flex items-center   gap-2 ">
                <img
                  src={person}
                  alt="person"
                  className="pt-2 w-[20px] h-[20px]"
                ></img>
                <div className="font-semibold text-white pt-2 md:flex ">
                  Become a Tutor
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Content>
    </div>
  );
}
