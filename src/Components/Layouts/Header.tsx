import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import Content from "./Content";

import hamburger from "../../Assets/Hamburger.svg";
import { Button } from "@mantine/core";
import TopHeader from "./TopHeader";

const navbarItems = ["about", "subject", "contact"];
export default function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {pathname !=='/tutor' && <TopHeader />}
      {/* <TopHeader /> */}
      <div className=" bg-white shadow-headerShadow py-3 md:py-2 sticky top-0 z-50 ">
        <Content>
          <div className="flex items-center ">
            <Link to="/">
              <div className="logo">
                <img className=" h-16 object-cover" src={logo} alt="" />
              </div>
            </Link>

            <div className="ml-auto  ">
              <div className="hidden md:flex items-center gap-10 ">
                {navbarItems.map((item, i) => (
                  <Link to={`/${item}`}>
                    <div
                      className={`capitalize text-base ${
                        pathname.includes(item)
                          ? "text-primary font-semibold"
                          : ""
                      }`}
                    >
                      {item}{" "}
                    </div>
                  </Link>
                ))}
                <div className="text-base font-semibold">
                  <Link to="/tutor">
                    <Button className=" bg-primary font-semibold" size="md">
                      Account
                    </Button>
                  </Link>
                </div>
                {/* <div className=''>
                <button className='bluebtn'>Account</button>
              </div> */}
              </div>
              <div className="md:hidden">
                <img src={hamburger} alt="" />
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}
