import React from "react";
import { SiFacebook, SiGmail, SiApple } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { SlEye } from "react-icons/sl";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center mt-16">
        <form>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col  text-center">
              <p className="text-[2rem]">Login to Your Account</p>
              <p className=" text-xs mt-2">Login using social networks</p>
              <div className="flex justify-center mt-4 space-x-6  text-[20px]">
                <button className="hover:text-[#1877F2] text-[#0f0] transition ease-in-out delay-60 duration-300">
                  <SiFacebook />
                </button>
                <button className="hover:text-[#A3AAAE] text-[#0f0] transition ease-in-out delay-60 duration-300">
                  <SiApple />
                </button>
                <button className="hover:text-[#0077b5] text-[#0f0] transition ease-in-out delay-60 duration-300">
                  <ImLinkedin />
                </button>
                <button className="hover:text-[#f44242] text-[#0f0] transition ease-in-out delay-60 duration-300">
                  <SiGmail />
                </button>
              </div>
            </div>
            <div className="flex  justify-between">
              <label htmlFor="" className=" mr-6">
                Email:
              </label>
              <input
                type="text"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
              />
            </div>
            <div className="flex  justify-between relative">
              <label htmlFor="" className=" mr-6">
                Password:
              </label>
              <div className=" text-black absolute right-2 top-[1px] text-lg">
                <button>
                  <SlEye />
                </button>
              </div>

              <input
                type="password"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
              />
            </div>

            <div className="flex  justify-between ">
              <label htmlFor="" className="flex space-x-[5rem]">
                <input
                  type="checkbox"
                  className=" rounded-2xl focus:ring-transparent outline-none bg-[#fff] text-[#0f0] h-5 w-5 outline-0 cursor-pointer "
                />
                <span>Remember me</span>
              </label>
            </div>

            <div className="flex justify-end space-x-8">
              <button
                type="submit"
                className=" bg-[#0f0] text-black rounded-3xl pl-4 pr-4 pt-1 pb-1 hover:shadow-lg shadow-white  hover:bg-white transition ease-in-out delay-60 duration-300"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
