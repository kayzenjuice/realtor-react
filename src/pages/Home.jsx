/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import elipse from "../assets/img/elipse.png";
import widget from "../assets/img/widget.png";

const Home = () => {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#16294a",
          borderTopLeftRadius: "10rem",
          borderTopRightRadius: "10rem",
          position: "relative",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          color: "white",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-16">
            <div className="relative mb-10 md:mb-0 text-center md:text-left z-10">
              <h2 className="animate-in duration-500 fade-in mb-20 xl:mb-24 font-heading font-medium text-9xl md:text-8xl xl:text-9xl leading-tight">
                Get inspired from the all designers
              </h2>
              <a
                className="animate-in duration-1000 slide-in-from-left inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Join now
              </a>
            </div>
            <img src={widget} alt="" />
          </div>
        </div>
        <img className="absolute right-0 top-0" src={elipse} alt="" />
      </section>

      <section className="py-24 2xl:pt-40 2xl:pb-52 bg-white">
        <div className="container px-6 mx-auto">
          <div className="mb-20 2xl:mb-36 text-center">
            <span className="block mb-9 text-xs leading-4 font-medium uppercase tracking-widest text-gray-300">
              How it works
            </span>
            <h2 className="animate-in duration-500 slide-in-from-left text-9xl md:text-8xl xl:text-9xl leading-none font-heading font-medium">
              Easy to use
            </h2>
          </div>
          <div className="animate-in duration-1000 slide-in-from-top flex flex-wrap md:flex-nowrap items-center justify-center -mx-4 mb-20 md:mb-32 2xl:mb-56">
            <a className="w-auto px-4 order-last md:order-first" href="#">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.21015 10.4594C7.59662 10.8128 7.59662 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.096617 6.28579 -0.096617 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880363 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <div className="w-full md:w-11/12 px-4 mb-12 md:mb-0">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <h2 className="mb-14 text-4xl lg:text-5xl leading-tight font-medium font-heading">
                        Choose application
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        The nulla commodo, commodo eros a, tristique lectus.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto xl:mt-10 mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <h2 className="mb-14 text-4xl lg:text-5xl leading-tight font-medium font-heading">
                        Feel free, take all
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        Proin nec nunc felis. In non tellus ultricies, rutrum
                        lacus et, pharetra elit.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative max-w-sm mx-auto mb-8">
                    <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border border-black border-opacity-10 z-10 rounded-3xl">
                      <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <h2 className="mb-14 text-2xl lg:text-5xl leading-tight font-medium font-heading">
                        Download app
                      </h2>
                      <p className="text-lg text-darkBlueGray-400">
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <a className="w-auto px-4 order-last" href="#">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.289848 1.54064C-0.0966159 1.18719 -0.0966159 0.615929 0.289848 0.265087C0.676312 -0.0870581 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.096616 11.3824 -0.096616 10.8112 0.289848 10.4603L4.81927 5.99853L0.289848 1.54064Z"
                  fill="black"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex w-44 h-1 mx-auto bg-blue-200">
            <a className="w-1/2 bg-indigo-500" href="#"></a>
            <a className="w-1/2 bg-transparent" href="#"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
