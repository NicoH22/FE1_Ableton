import React, { Component } from "react";
import Link from "next/link";
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
                align-middle lg:text-base lg:ml-auto lg:mr-0 lg:pr-0 lg:text-[#0000FF]
                pl-[0.625rem] xl:pr-[0.625rem]"
                >
                  <a className="cursor-pointer">Try Live for free</a>
                </li>
                <li
                  className="last:mr-0 last:pr-0 lg:mr-0 xl:ml-[0.625rem] xl:mr-0
                inline-block align-middle xl:relative xl:top-[1px] mx-0
                px-[0.625rem] inline-block align-middle lg:mx-[0.3125rem]"
                >
                  <a className="cursor-pointer">Log in or register</a>
                </li>
              </ul>
            </div>
            <Transition
              enter="transition-transform duration-300 ease-in-out"
              enterFrom="transform translate-y-[-100%] opacity-95"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition-all duration-[400ms] ease-in"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-[-100%] opacity-95"
            >
              <Disclosure.Panel
                as="div"
                className="lg:hidden maxmd:z-20 maxmd:pt-[1rem] maxmd:px-[0.9375rem]
                maxmd:text-white maxmd:top-0 maxmd:left-0 maxmd:px-[1.25rem]
                bg-[#0000FF] w-full"
              >
                <ul
                  className="text-xl leading-normal w-full pr-[1.25rem] font-bold
                my-0 pl-0 list-none inline-block align-middle"
                >
                  <li
                    className="first:ml-0 first:pl-0 maxmd:block maxmd:mb-[1em] maxmd:ml-0
                    maxmd:ml-0 inline-block align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Live</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                  align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Push</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Shop</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Link</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Packs</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem]"
                  >
                    <button>Help</button>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem]"
                  >
                    <a className="cursor-pointer">Try Live for free</a>
                  </li>
                  <li
                    className="maxmd:block maxmd:mb-[1em] maxmd:ml-0 maxmd:pl-0 inline-block
                    align-middle mx-0 px-[0.625rem] text-[.875rem] font-normal"
                  >
                    <a className="cursor-pointer">Log in or register</a>
                  </li>
                </ul>
                <div>
                  <section className="pt-[.625rem]">
                    <h3 className="my-0 text-[1.25rem] pb-[.625rem] font-bold p-0">
                      More on Ableton.com:
                    </h3>
                    <ul
                      className="text-[.875rem] my-0 pl-0 no-underline font-normal
                    inline-block align-middle"
                    >
                      <li
                        className="first:ml-0 first:pl-0 maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Blog</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Ableton for the Classroom</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Ableton for Colleges and Universities</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Certified Training</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]
                      text-[#FF764D]"
                      >
                        <a>About Ableton</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Jobs</a>
                      </li>
                      <li
                        className="maxmd:block maxmd:mb-[1em] maxmd:ml-0
                      maxmd:pl-0 inline-block align-middle mx-0 px-[Ø.625rem]"
                      >
                        <a>Apprenticeships</a>
                      </li>
                    </ul>
                  </section>
                  <section className="pt-[.625rem]">
                    <h3
                      className="mx-0 text-[1.25rem] leading-[1.5] pb-[.625rem]
                    font-bold"
                    >
                      More from Ableton:
                    </h3>
                    <div className="relative flex flex-nowrap">
                      <div className="maxmd:pb-[1.25rem] overflow-x-auto">
                        <ul
                          className="text-[.875rem] leading-[1.5] mx-0 pl-0
                        no-underline font-bold align-middle flex"
                        >
                          <li className="min-w-[15em] px-[.625rem] list-item">
                            <a>
                              <div>
                                <h4>Loop</h4>
                                <p className="font-normal">
                                  Watch Talks, Performances and Features from
                                  Ableton&apos;s Summit for Music Makers
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="min-w-[15em] px-[.625rem] list-item">
                            <a>
                              <div>
                                <h4>Learning Music</h4>
                                <p className="font-normal">
                                  Learn the fundamentals of music making right
                                  in your browser.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="min-w-[15em] px-[.625rem] list-item">
                            <a>
                              <div>
                                <h4>Learning Synths</h4>
                                <p className="font-normal">
                                  Get started with synthesis using a web-based
                                  synth and accompanying lessons.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="min-w-[15em] px-[.625rem] list-item">
                            <a>
                              <div>
                                <h4>Making Music</h4>
                                <p className="font-normal">
                                  Some tips from 74 Creative Strategies for
                                  Electronic Producers.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>

          <div className="relative top-[-1px] h-[1px]"></div>
        </nav>
        <div className="block h-0 border-t-2 border-solid border-[#eee]"></div>
        <nav>
          <ul
            className="w-full transition-transform duration-[2500ms] ease-in-out
            translate-y-0 translate-x-[-50%] relative h-[3.75rem] left-1/2 block
            max-w-[100rem] pt-[1.0625rem] pb-[.9375rem] px-[1.25rem] overflow-x-auto
            overflow-y-hidden whitespace-nowrap text-[.875rem] leading-[1.5] font-bold
            my-0 no-underline align-middle"
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
