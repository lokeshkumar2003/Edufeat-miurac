import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import Content from "./Content";
import close from '../../Assets/close.svg';
import hamburger from "../../Assets/Hamburger.svg";
import { Button } from "@mantine/core";
import TopHeader from "./TopHeader";

const navbarItems = ["about", "subject", "contact"];
export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => {
    setNav(!nav);
  };
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/tutor" && <TopHeader />}
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
              <div className="md:hidden " >
                {!nav ? <img src={hamburger} alt="" /> : <img src={close} alt="" />}
              </div>
            </div>
            <ul className="md:hidden">
              <li>
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
                <div className="flex flex-col my-4">
                <Link to="/tutor">
                    <Button className=" bg-primary font-semibold" size="md">
                      Account
                    </Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </Content>
      </div>
    </div>
  );
}
