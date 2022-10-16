import React, { Component } from "react";
import Link from "next/link";
import "./navbar.module.css";
import { Disclosure, Transition } from "@headlessui/react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="z-35 relative pt-[1.25rem] pb-0 overflow-visible">
        <nav className="block">
          <Link href="/">
            <a
              className="z-30 lg:absolute lg:left-0
              inline-block align-middle relative ml-[1.25rem] mr-[2rem]
              mb-[1.25rem] text-3xl font-bold hover:underline leading-[1.75rem]"
            >
              FE1_Ableton
            </a>
          </Link>

          <Disclosure>
            <Disclosure.Button
              className="lg:hidden lg:mb-[1.25rem] text-[1.25rem] select-none
              relative inline-block align-middle mb-[0.9375rem] font-bold cursor-pointer
              z-30 m-0 p-0 text-[1em] text-center no-underline border-none rounded-none
              after:scale-x-[0.8] after:inline-block after:w-0 after:h-0 after:mb-[-3px]
              after:ml-[0.4em] after:content-['↓'] after:pointer-events-none"
              aria-hidden="true"
            >
              Menu
            </Disclosure.Button>
            <div
              className="maxmd:hidden w-full maxmd:z-20 maxmd:pt-[4.375rem] maxmd:px-[0.9375rem]
              maxmd:translate-y-[-100%] maxmd:top-0 maxmd:left-0"
            >
              <ul
                className="lg:flex lg:content-center lg:align-middle xl:text-xl
                pl-[16rem] lg:pr-10 lg:text-base lg:mb-5 lg:h-7
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
            </div>
            <Disclosure.Panel
              as="div"
              className="w-full maxmd:z-20 maxmd:pt-[4.375rem] maxmd:px-[0.9375rem]
              maxmd:translate-y-[-100%] maxmd:top-0 maxmd:left-0"
            >
              <ul
                className="lg:flex lg:content-center lg:align-middle xl:text-xl
                pl-[16rem] xl:pr-10 lg:text-base lg:mb-5 lg:h-7
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
            </Disclosure.Panel>
          </Disclosure>

          {/* <div>stretcher</div> */}
        </nav>
        <nav
          aria-label="Main"
          className="flex justify-between items-center border-b-2 border-grey"
        >
          {/* <Link href="/">
            <a
              className="z-30 absolute inline-block align-middle
              text-3xl font-bold hover:underline ml-10 mr-8 mb-5"
            >
              FE1_Ableton
            </a>
          </Link> */}
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
            <li
              className="cursor-pointer xl:mx-[0.3125rem] inline-block
            align-middle mx-0 px-[0.625rem]"
            >
              <a>Jobs</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
