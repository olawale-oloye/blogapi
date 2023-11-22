import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SiAmazonapigateway } from "react-icons/si";

const NavBar = () => {
  const location = useLocation();
  return (
    <div>
      <div className=" text-white ml-auto mr-auto mt-6">
        <div className="flex justify-between align-middle ml-8 mr-8 ">
          <div className=" text-3xl text-[#6ab339] ">
            <SiAmazonapigateway />
          </div>

          <div className="  space-x-11 flex">
            <Link to="/"> Home </Link>
            <Link to="/about" className=" whitespace-nowrap">
              About Us
            </Link>

            <Link to="/login">
              <div
                className=" bg-slate-500 pl-4 pr-4 pt-1 pb-1 rounded-3xl hover:text-black hover:bg-white transition ease-in-out delay-60 duration-300
              
               "
              >
                Login
              </div>
            </Link>
            <Link to="/registration">Register</Link>
            {/* {location.pathname === "/registration"} */}
          </div>
        </div>
        <div className=" border-t-[1px] mt-6 border-[#5a5a5a]"></div>
      </div>
    </div>
  );
};

export default NavBar;
