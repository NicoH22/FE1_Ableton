import React from "react";
import "./footer.module.css";
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="main_footer font-normal xl:text-xl max-w-full mx-auto">
      <div
        className="pt-8vw relative after:block after:h-0 after:border-t-2
        after:border-solid after:absolute after:left-0 after:right-0
        after:border-[#fff] main_footer"
      ></div>
      {/* CONTAINER */}
      <div className="main_footer px-8vw">
        <div className="main_footer pt-8vw">
          <div className="main_footer after:table">
            {/* INVISIBLE HEIGHT */}
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
          {/* <div className="main_footer after:table">
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
          <div className="main_footer after:table">
            <div
              className="main_footer lg:w-[30%] lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <h3 className="main_footer m-0 text-base font-bold">Community</h3>
              <ul className="main_footer list-none m-0 p-0 font-normal block">
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Find Ableton User Groups{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Find Certified Training{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Become a Certified Trainer{" "}
                    <BiChevronRight className="self-center" />
                  </a>
                </li>
              </ul>{" "}
            </div>
            <div
              className="main_footer lg:w-[30%] lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <h3 className="main_footer m-0 text-base font-bold">
                Distributors
              </h3>
              <ul className="main_footer list-none m-0 p-0 font-normal block">
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Find Distributors <BiChevronRight className="self-center" />
                  </a>
                </li>
                <li>
                  <a
                    className="main_footer no-underline cursor-pointer flex
                  hover:bg-[#0000FF]/50"
                  >
                    Try Push in-store <BiChevronRight className="self-center" />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="main_footer lg:w-[40%] lg:float-left lg:pr-[0.625rem] xs:pb-4vw
            pb-8vw"
            >
              <h3 className="main_footer m-0 text-base font-bold p-0 block">
                Language and Location
              </h3>
              <div className="main_footer text-[0.875rem] mt-[0.75em]">
                <div className="main_footer inline-block w-auto mr-0.5 max-w-[200px]">
                  <div
                    className="main_footer inline-block w-auto max-w-none relative
                    after:absolute after:top-1 after:right-0 after:w-[30px] after:h-full
                    after:content-['↓'] after:pointer-events-none"
                  >
                    <form className="main_footer block mt-0">
                      <select
                        name="language"
                        className="appearance-none m-0 py-[0.35em]
                      border-none bg-transparent font-bold w-[100%] select-none h-[1.875rem
                      pl-[0.75em] pr-[50px] rounded-none cursor-pointer"
                      >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="ja">日本語</option>
                        <option value="zh-ch">简体中文</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="main_footer inline-block w-auto mr-0.5 max-w-[200px]">
                  <div
                    className="main_footer inline-block w-auto max-w-none relative
                    after:absolute after:top-1 after:right-0 after:w-[30px] after:h-full
                    after:content-['↓'] after:pointer-events-none"
                  >
                    <form className="main_footer block mt-0">
                      <select
                        name="country_code"
                        className="appearance-none m-0 py-[0.35em]
                      border-none bg-transparent font-bold w-[100%] select-none h-[1.875rem
                      pl-[0.75em] pr-[50px] rounded-none cursor-pointer"
                      >
                        <option value>Please choose</option>
                        <optgroup label="Common Countries">
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="fr">France</option>
                          <option value="de">Germany</option>
                          <option value="ca">Canada</option>
                          <option value="jp">Japan</option>
                          <option value="cn">China</option>
                        </optgroup>
                        <optgroup label="Common Countries">
                          <option value="c1">Country-1</option>
                          <option value="c2">Country-2</option>
                          <option value="c3">Country-3</option>
                          <option value="c4">Country-4</option>
                        </optgroup>
                      </select>
                    </form>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="main_footer after:table">
            <div
              className="main_footer pr-0 pb-8vw lg:w-full lg:float-left lg:pr-[0.625rem]
              xs:pb-4vw"
            >
              <div className="lg:mt-4 lg:w-auto inline-block align-middle">
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Contact Us
                </a>
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Press Resources
                </a>
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Legal Info
                </a>
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Privacy Policy
                </a>
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Cookie Settings
                </a>
                <a
                  className="no-underline lg:inline-block lg:mb-0 mr-[1em]
                mb-[0.5rem] block text-[0.875rem] text-bold"
                >
                  Imprint
                </a>
              </div>
              <div
                className="lg:float-right lg:w-auto lg:ml-[3em] lg:mt-[1rem]
              text-left mt-8vw w-full"
              >
                <span
                  className="ml-0 mr-[1em] text-[0.875rem] text-bold
                lg:float-right inline-block align-middle text-left"
                >
                  Made in Berlin
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
