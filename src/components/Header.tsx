import React from 'react';
import ThemeSwitch from "./ThemeSwitch ";
import MobileNav from "./MobileNav";
import Image from 'next/image'
import ChainLogo from "../assets/image/chaincue-logo.png";
import ChainLogoDark from "../assets/image/chaincue-logo-crop1-dark.png";
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import Link from "next/link";
import {Dropdown} from "flowbite-react";

const Header = () => {
  return (
    <header className={"bg-neutral-50 dark:bg-neutral-600"}>
      {/*<div className={"flex items-center justify-between py-3"}>*/}
      {/*  <div className={"ml-3"}>*/}
      {/*    <a href={"#"}>*/}
      {/*      <Image src={ChainLogoWhite} alt="Picture of the author" width={300} height={300}/>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div >*/}
      {/*    <ul className={"flex space-x-1"}>*/}
      {/*      <li>*/}
      {/*        <Link href="/">Projects</Link>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <Link href="/about">About</Link>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <Link href="/contact">Contact</Link>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div className={"flex space-x-1"}>*/}
      {/*    <h1>log</h1>*/}
      {/*    <h1>log</h1>*/}
      {/*    <h1>log</h1>*/}
      {/*    <h1>log</h1>*/}
      {/*    <h1>log</h1>*/}
      {/*    <ThemeSwitch/>*/}
      {/*  </div>*/}
      {/*  <Dropdown label="Dropdown button">*/}
      {/*    <Dropdown.Item>*/}
      {/*      Dashboard*/}
      {/*    </Dropdown.Item>*/}
      {/*    <Dropdown.Item>*/}
      {/*      Settings*/}
      {/*    </Dropdown.Item>*/}
      {/*    <Dropdown.Item>*/}
      {/*      Earnings*/}
      {/*    </Dropdown.Item>*/}
      {/*    <Dropdown.Item>*/}
      {/*      Sign out*/}
      {/*    </Dropdown.Item>*/}
      {/*  </Dropdown>*/}
      {/*</div>*/}


      <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div id="mega-menu"
               className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown"
                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700
                        border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600
                        md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500
                        md:dark:hover:bg-transparent dark:border-gray-700">
                  Company
                  <svg aria-hidden="true" className="ml-1 w-5 h-5 md:w-4 md:h-4" fill="currentColor"
                               viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
                </button>
                <div id="mega-menu-dropdown"
                     className="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 text-gray-900 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#"
                           className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header;
