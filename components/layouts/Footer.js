import React from "react";
import "./footer.module.css";
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="main_footer font-normal xl:text-xl max-w-full mx-auto">
      <div
        className="pt-8vw relative after:block after:h-0 after:border-t-2
        after:border-solid after:absolute after:left-0 after:right-0
        after:border-[#fff] main_footer"
      ></div>
      <div className="main_footer px-8vw">
        <div className="main_footer pt-8vw">
          <div className="main_footer after:table">
            <div
              className="lg:w-full lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <h1
                className="lg:w-[188px] md:w-[122px] w-[122px] text-[48px]
                h-auto max-w-full"
              >
                Ableton
              </h1>
            </div>
          </div>
          <div className="main_footer after:table">
            <div
              className="main_footer pr-0 lg:w-[40%] lg:float-right lg:pr-[0.625rem]
              xs:pb-4vw pb-8vw"
            >
              <h3 className="main_footer m-0 text-base font-bold">
                Sign up to our newsletter
              </h3>
              <div>
                Enter your email address to stay up to date with the latest
                offers, tutorials, downloads, surveys and more.
              </div>
              <form className="main_footer mt-4 block">
                <div className="main_footer flex">
                  <div className="main_footer flex-1">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="main_footer w-full m-0 py-[0.4em] px-[0.75em] bg-transparent
                      bg-[#eee] border-0 select-none font-normal rounded-none
                      inline-block cursor-text align-start text-black"
                    />
                  </div>
                  <input
                    value="Sign up"
                    type="submit"
                    className="main_footer inline-block m-0 py-[0.35em] px-[1.5em] font-bold
                  bg-[#0000FF] rounded-none cursor-pointer select-none whitespace-pre items-start
                  text-center text-white"
                  />
                </div>
              </form>
            </div>
            <div
              className="main_footer lg:w-[30%] lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <ul className="main_footer list-none m-0 p-0 font-normal block">
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Register Live or Push{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    About Ableton <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Jobs <BiChevronRight className="self-center" />
                  </a>
                </li>
              </ul>
              <ul
                className="main-footer m-0 p-0 list-none font-bold block
              xl:text-xl"
              >
                <li className="main-footer inline-block">
                  <FaFacebookSquare
                    className="main-footer no-underline bg-[#3477F2] xxs:w-10 xxs:h-10
                  w-8 h-8 mt-[0.625rem] inline-block align-top bg-center
                  bg-no-repeat bg-contain mr-[0.625rem]"
                  />
                </li>
                <li className="main-footer inline-block">
                  <FaTwitterSquare
                    className="main-footer no-underline bg-[#1DA1F2] xxs:w-10 xxs:h-10
                  w-8 h-8 mt-[0.625rem] inline-block align-top bg-center
                  bg-no-repeat bg-contain mr-[0.625rem]"
                  />
                </li>
                <li className="main-footer inline-block">
                  <FaYoutubeSquare
                    className="main-footer no-underline bg-[#FF001D] xxs:w-10 xxs:h-10
                  w-8 h-8 mt-[0.625rem] inline-block align-top bg-center
                  bg-no-repeat bg-contain mr-[0.625rem]"
                  />
                </li>
                <li className="main-footer inline-block">
                  <FaInstagramSquare
                    className="main-footer no-underline bg-[#F77737] xxs:w-10 xxs:h-10
                  w-8 h-8 mt-[0.625rem] inline-block align-top bg-center
                  bg-no-repeat bg-contain mr-[0.625rem]"
                  />
                </li>
              </ul>
            </div>
            <div
              className="main_footer lg:w-[30%] lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <h3 className="main_footer m-0 text-base font-bold">Education</h3>
              <ul className="main_footer list-none m-0 p-0 font-normal block">
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Offers for students and teachers{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Ableton for the Classroom{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Ableton for Colleges and Universities{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
