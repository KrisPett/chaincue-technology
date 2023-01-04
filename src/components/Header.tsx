import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import ChainLogoDark from "../assets/image/chaincue-logo-crop1-dark.png";
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import IconHeader from "./IconHeader";
import ThemeSwitch1 from "./ThemeSwitch1";
import {useTheme} from "next-themes";
import Link from "next/link";

const Header = () => {
  const {theme, setTheme, resolvedTheme} = useTheme()
  const [isTheme, setIsTheme] = useState<string>();

  useEffect(() => {
    setIsTheme(theme);
  }, [theme])

  return (
    <header className={"bg-zinc-50 dark:bg-zinc-600"}>
      <div className={"flex items-center justify-between py-3"}>
        <div className={"flex"}>
          <div>
            <a href={"#"} className="btn btn-ghost hover:bg-transparent">
              <Image src={isTheme === "light" ? ChainLogoWhite : ChainLogoDark} alt="" width={300} height={300}
                     className="min-w-full" priority={true}/>
            </a>
          </div>

          <div>
            <ul className={"flex space-x-1"}>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                  <li>
                    <a className={"btn btn-ghost"}>
                      Projects
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                           viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                      </svg>
                    </a>
                    <ul className="p-2">
                      <li><a>Chainqt3</a></li>
                      <li><a>CryptoApp</a></li>
                    </ul>
                  </li>
                  <li><Link href="/about"
                            className={"btn btn-ghost hover:text-orange-800 dark:hover:text-orange-500"}>About</Link>
                  </li>
                  <li><Link href="/contact"
                            className={"btn btn-ghost hover:text-orange-800 dark:hover:text-orange-500"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 mr-4">
          <div className={" flex mr-2"}>
            <ThemeSwitch1/>
          </div>
          <IconHeader kind={"github"} href={"#"} tooltip={"Github"}/>
          <IconHeader kind={"gitlab"} href={"#"} tooltip={"Gitlab"}/>
          <IconHeader kind={"twitter"} href={"#"} tooltip={"Twitter"}/>
          <IconHeader kind={"linkedin"} href={"#"} tooltip={"LinkedIn"}/>
        </div>
      </div>
    </header>
  )
}

export default Header;
