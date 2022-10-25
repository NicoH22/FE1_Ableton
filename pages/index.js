import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import MainImg from "../public/images/header.jpg";
import Img2 from "../public/images/image-6.jpg";
import { BiChevronRight } from "react-icons/bi";
import ReactPlayer from "react-player";
import Footer from "../components/layouts/footer/Footer";
import AboutText from "../components/About/AboutText";

export default function Home() {
  return (
    <>
      <Head>
        <title>FE1_Ableton</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-[100vw] relative">
        {/* MAIN PAGE */}
        <main>
          {/* HEADER IMG */}
          <div
            className="mx-8vw mb-8vw relative min-h-[100vh]
            min-h-[100vh_-_120px]"
          >
            <Image
              src={MainImg}
              alt="header-img"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* TEXT-1 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              We make <span className="text-[blue]">Live</span>,{" "}
              <span className="text-[blue]">Push</span> and{" "}
              <span className="text-[blue]">Link</span> — unique software and
              hardware for music creation and performance. With these products,
              our community of users creates amazing things.
            </h1>
            <p className="text-[1rem]">
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </p>
          </AboutText>

          {/* COLLAGE-1 */}
          <div className="relative py-8vw mb-8vw">
            <div
              className="block bg-[#fbffa7] w-[58.33333vw]
            h-[58.33333vw] left-[41.66667vw] absolute top-0 z-0"
            ></div>
            <div
              className="bg-no-repeat bg-cover bg-[url('../public/images/photo-1.jpg')]
            bg-50% w-[41.66667vw] h-[41.66667vw] ml-8vw inline-block z-[1]
            relative align-middle"
            ></div>
            <div
              className="bg-no-repeat bg-cover bg-[url('../public/images/photo-2.jpeg')]
            bg-50% w-[33.33333vw] h-[25vw] ml-8vw inline-block z-[1] relative
            align-middle"
            ></div>
          </div>

          {/* TEXT-2 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              Making music isn’t easy. It takes time, effort, and learning. But
              when you’re in the flow, it’s incredibly rewarding.
            </h1>
            <p className="text-[1rem]">
              We feel the same way about making Ableton products. The driving
              force behind Ableton is our passion for what we make, and the
              people we make it for.
            </p>
          </AboutText>

          {/* MEDIA */}
          <div className="w-[50vw] mx-auto mb-[8.33338vw]">
            <a
              href="https://www.youtube.com/watch?v=9SbnhgjeyXA"
              className="block relative w-full cursor-pointer pb-[56.25%] z-40"
            ></a>
            <p>Why Ableton - Juanpe Bolivar</p>
          </div>

          {/* TEXT-3 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              We are more than 350 people from 30 different countries divided
              between our headquarters in Berlin and our offices in Los Angeles
              and Tokyo.
            </h1>
            <p className="text-[1rem]">
              Most of us are active musicians, producers, and DJs, and many of
              us use Live and Push every day. We come from a wide range of
              cultural and professional backgrounds. Some of us have PhDs, some
              are self-taught, and most of us are somewhere in between. What
              connects us is the shared belief that each of us has the skills
              and knowledge to contribute to something big: helping to shape the
              future of music culture.
            </p>
          </AboutText>

          {/* COLLAGE-2 */}
          <div className="p-8vw relative mb-8vw border-box block">
            <div className="w-[58.33333vw] h-[75vw] left-0 absolute top-0 z-0 bg-[#B6FFC0]"></div>
            <div className="inline-block align-middle relative z-1">
              <div
                className="bg-no-repeat bg-cover bg-[url('../public/images/photo-3.jpeg')]
            bg-50% w-[33.33333vw] h-[25vw]"
              ></div>
              <div
                className="bg-no-repeat bg-cover bg-[url('../public/images/photo-4.jpeg')]
            bg-50% w-[33.33333vw] h-[25vw] mt-8vw"
              ></div>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-[url('../public/images/photo-5.jpeg')]
            bg-50% w-[41.66667vw] h-[41.66667vw] ml-8vw inline-block z-[1]
            relative align-middle"
            ></div>
          </div>

          {/* TEXT-4 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              We believe it takes focus to create truly outstanding instruments.
              We only work on a few products and we strive to make them great.
            </h1>
            <p className="text-[1rem]">
              Rather than having a one-size-fits-all process, we try to give our
              people what they need to work their magic and grow. We’ve learned
              that achieving the best results comes from building teams that are
              richly diverse, and thus able to explore problems from a wider set
              of perspectives. We don’t always agree with each other, but
              opinion and debate are valued and openly encouraged.
            </p>
          </AboutText>

          {/* IMG-2 */}
          <div className="mx-8vw w-auto mb-8vw">
            <Image src={Img2} alt="Image-6" />
          </div>

          {/* TEXT-5 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              We’re passionate about what we do, but we’re equally passionate
              about improving who we are.
            </h1>
            <p className="text-[1rem] mb-[1em]">
              We work hard to foster an environment where people can grow both
              personally and professionally, and we strive to create a wealth of
              opportunities to learn from and with each other.
            </p>
            <p className="text-[1rem]">
              Alongside an internal training program, employees are actively
              supported in acquiring new knowledge and skills, and coached on
              applying these in their daily work. In addition, staff-organized
              development and music salons are a chance to discuss new
              technologies, production techniques and best practices.
            </p>
          </AboutText>

          {/* COLLAGE-3 */}
          <div className="py-8vw relative mb-8vw">
            <div
              className="w-[66.66667vw] h-[58.33333vw] left-[16.66667vw] absolute
          top-0 z-0 bg-[#D5B3FF]"
            ></div>
            <div
              className="sticky bg-no-repeat bg-cover bg-[url('../public/images/photo-7-a.jpeg')]
            bg-50% w-[33.33333vw] h-[25vw] ml-8vw left-8vw inline-block
            align-middle z-1 "
            ></div>
            <div
              className="bg-no-repeat bg-cover bg-[url('../public/images/photo-7-b.jpeg')]
            bg-50% w-[41.66667vw] h-[41.66667vw] inline-block align-middle relative
            z-1 ml-[16.66667vw]"
            ></div>
          </div>

          {/* TEXT-6 */}
          <AboutText>
            <h1 className="first:mt-0 mb-[0.7em] font-semibold mlg:text-3xl text-xl">
              We want our employees to love it here. Since we’re looking for
              exceptional talent from around the world, we will do everything we
              can to make your transition as easy as possible.
            </h1>
            <p className="text-[1rem]">
              If you&apos;re joining us in Berlin, we&apos;ll help with
              relocation and paperwork. We’ll even provide you with free German
              or English lessons. Plus, working in Germany means you can expect
              comprehensive health insurance for you and your family, as well as
              generous maternity and paternity leave. Office hours are flexible,
              but it’s not all work; we have several company and team outings
              throughout the year as well as a variety of fun, informal
              small-group activities.
            </p>
          </AboutText>

          {/* COLLAGE-4 */}
          <div>
            <div
              className="bg-no-repeat bg-cover bg-[url('../public/images/photo-8.jpeg')]
            bg-50% xl:w-[41.66667vw] xl:h-[41.66667vw] xl:inline-block xl:align-top relative
            maxlg:h-[50vw] xl:ml-8vw maxlg:mx-8vw"
            ></div>
            <div
              className="p-8vw xl:w-[41.66667vw] xl:h-[41.66667vw] xl:inline-block
          xl:align-top xl:mx-0 !bg-[#B1C5FF] mx-8vw"
            >
              <div className="table w-[100%] h-[100%]">
                <div className="m-bodyText table-cell align-middle">
                  <h1
                    className="mb-[.7em] mt-[2em] mlg:text-[1.875rem] mlg:leading-[1.4] text-[1.25rem]
                  leading-[1.5]"
                  >
                    We’re really proud of the work we’ve done so far. But
                    there’s so much more to come. If you’d like to be a part of
                    it, please join us.
                    <a className="block mt-[1em] text-[#0000FF] flex cursor-pointer">
                      See latest jobs <BiChevronRight className="self-end" />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
