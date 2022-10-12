import React, { Component } from "react";
import Link from "next/link";
import "./navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="z-35 relative pt-5 pb-0 overflow-visible">
        <nav
          aria-label="Main"
          className="flex justify-between items-center border-b-2 border-grey"
        >
          <Link href="/">
            <a
              className="z-30 absolute inline-block align-middle
              text-3xl font-bold hover:underline ml-10 mr-8 mb-5"
            >
              FE1_Ableton
            </a>
          </Link>
          <div className="w-full">
            <ul
              className="lg:flex lg:content-center lg:align-middle xl:text-xl
            xl:pl-[16rem] xl:pr-10 lg:text-base lg:mb-5 lg:h-7
            lg:pb-0 w-full mt-0"
            >
              <li
                className="first:ml-0 first:pl-0 xl:mx-[0.3125rem] inline-block
              align-middle mx-0 px-[0.625rem]"
              >
                <button>Live</button>
              </li>
              <li
                className="first:ml-0 first:pl-0 xl:mx-[0.3125rem] inline-block
                align-middle mx-0 px-[0.625rem]"
              >
                <button>Push</button>
              </li>
              <li
                className="xl:mx-[0.3125rem] inline-block align-middle
              mx-0 px-[0.625rem]"
              >
                <button>Shop</button>
              </li>
              <li
                className="xl:mx-[0.3125rem] inline-block align-middle
              mx-0 px-[0.625rem]"
              >
                <button>Link</button>
              </li>
              <li
                className="xl:mx-[0.3125rem] inline-block align-middle
              mx-0 px-[0.625rem]"
              >
                <button>Packs</button>
              </li>
              <li
                className="xl:mx-[0.3125rem] inline-block align-middle
              mx-0 px-[0.625rem]"
              >
                <button>Help</button>
              </li>
              <li
                className="xl:mx-[0.3125rem] inline-block align-middle
              mx-0 px-[0.625rem] text-[#FF764D]"
              >
                <button
                  className="inline-block p-0 m-0 text-center no-underline
                whitespace-nowrap cursor-pointer select-none bg-none bg-transparent
                border-none apparance-none rounded-none"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="more"
                >
                  <span>More</span>
                  <span>
                    <span className="ml-2">+</span>
                  </span>
                </button>
              </li>

              {/* RIGHT SIDE NAVBAR */}
              <li
                className="xl:mr-[0.3125rem] xl:text-xl leading-normal inline-block
                align-middle lg:text-sm lg:ml-auto lg:mr-0 lg:pr-0 lg:text-[#0000FF]
                pl-[0.625rem] xl:pr-[0.625rem]"
              >
                <a className="cursor-pointer">Try Live for free</a>
              </li>
              <li
                className="last:mr-0 last:pr-0 lg:mr-0 xl:ml-[0.625rem] xl:mr-0
                inline-block align-middle xl:relative xl:top-[1px] mx-0
                px-[0.625rem] inline-block align-middle"
              >
                <a className="cursor-pointer">Log in or register</a>
              </li>
            </ul>

            {/* MORE SECTION */}
          </div>
        </nav>
        {/* SEPARATOR */}
        <nav>
          <ul
            className="w-full xl:px-10 xl:text-base xl:h-[4.25rem]
          xl:py-5 relative block max-w-[100rem] overflow-x-auto
          overflow-y-hidden lg:p-5 lg:pt-4 list-none my-0 align-middle
          m-0"
          >
            <li
              className="cursor-pointer first:ml-0 first:pl-0
            text-[#FF764D] xl:mx-[0.3125rem] inline-block
            align-middle mx-0 px-[0.625rem]"
            >
              <a>About</a>
            </li>
            <li className="cursor-pointer xl:mx-[0.3125rem] inline-block
            align-middle mx-0 px-[0.625rem]">
              <a>Jobs</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
