/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAuthStatus from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const Header = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const [showHamburger, setShowHamburger] = useState(false);

  const [pageState, setPageState] = useState("Sign In");

  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  function showSidePanel() {
    setShowHamburger((prevState) => !prevState);
  }

  return (
    <section className="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
      <nav className="flex justify-between px-6 lg:px-12 py-8">
        <div className="flex w-full items-center">
          <a onClick={() => navigate("/")}>
            <img
              className="h-5 cursor-pointer"
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt=""
            />
          </a>
          <ul className="hidden xl:flex px-4 ml-32">
            <li className="mr-16">
              <a
                className={`text-gray-400 hover:text-gray-500 ${
                  pathMatchRoute("/") && "text-black border-b-red-500"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="mr-16">
              <a
                className={`text-gray-400 hover:text-gray-500 ${
                  pathMatchRoute("/offers") && "text-black border-t-red-500"
                }`}
                onClick={() => navigate("/offers")}
              >
                Offers
              </a>
            </li>
          </ul>
          <div className="hidden xl:flex items-center ml-auto">
            <a className="text-gray-400 hover:text-gray-500" href="#">
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 18.0121H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.87891 22H10.8789"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <div className="w-px h-8 bg-gray-200 bg-opacity-50 ml-9 mr-11"></div>
            <a
              className="flex items-center mr-12"
              onClick={() => navigate("/profile")}
            >
              {loggedIn ? (
                <span>{auth.currentUser.displayName}</span>
              ) : (
                <span>Guest</span>
              )}
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/avatar-online.png"
                alt=""
              />
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/arrow-down-gray.svg"
                alt=""
              />
            </a>
            <button
              onClick={() => navigate("/profile")}
              className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300"
            >
              <span className="block mt-px">{pageState}</span>
            </button>
          </div>
        </div>
        <button
          onClick={showSidePanel}
          className="navbar-burger self-center xl:hidden focus:outline-none"
        >
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="2" fill="currentColor"></rect>
            <rect y="14" width="25" height="2" fill="currentColor"></rect>
          </svg>
        </button>
      </nav>
      <div
        className={` fade-in ease-in duration-300 navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${
          showHamburger ? " animate-in slide-in-from-left visible" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
          <div className="flex items-center pl-16 mb-8">
            <a className="text-2xl text-gray-800 font-bold" href="#">
              <img
                className="h-12"
                src="uinel-assets/logos/uinel-gray-black.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center mb-10 px-10">
            <a className="flex items-center ml-1" href="#">
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/avatar-online.png"
                alt=""
              />
              <img
                className="ml-6"
                src="uinel-assets/elements/navigations/arrow-down-gray.svg"
                alt=""
              />
            </a>
            <a className="text-gray-400 hover:text-gray-500 ml-auto" href="#">
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 18.0121H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.87891 22H10.8789"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                  onClick={() => {
                    navigate("/");
                    showSidePanel();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                  onClick={() => {
                    navigate("/offers");
                    showSidePanel();
                  }}
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <button
              onClick={() => {
                navigate("/profile");
                showSidePanel();
              }}
              className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full"
            >
              <span className="block mt-px">{pageState}</span>
            </button>
            <p className="mt-6 mb-4 text-center">
              <span className="text-sm text-darkBlueGray-400">
                2021 © Uinel. All rights reserved.
              </span>
            </p>
          </div>
        </nav>
        <button
          onClick={showSidePanel}
          className="navbar-close absolute top-5 p-6 right-5"
        >
          <div className="absolute top-3">
            <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
            <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Header;
