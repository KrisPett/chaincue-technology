import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import ChainLogoDark from "../assets/image/chaincue-logo-crop1-dark.png";
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import IconHeader from "./IconHeader";
import ThemeSwitch1 from "./ThemeSwitch1";
import {useTheme} from "next-themes";
import Link from "next/link";

const links = {
  github: "https://github.com/KQT3",
  gitlab: "https://gitlab.com/KQT3",
  twitter: "https://twitter.com/chaincue",
  linkedin: "https://www.linkedin.com/in/kristoffer-pettersson3/",
  crypto_app: "https://crypto.chaincuet.com/"
}

const Header = () => {
  const {theme, setTheme, resolvedTheme} = useTheme()
  const [isTheme, setIsTheme] = useState<string>();

  useEffect(() => {
    setIsTheme(theme);
  }, [theme])

  return (
    <header className={"bg-zinc-50 dark:bg-zinc-600 dark:bg-gradient-to-r from-zinc-600 to-gray-500"}>
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
                    <a className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                      Projects
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                           viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                      </svg>
                    </a>
                    <ul className="p-4 bg-zinc-100 dark:bg-zinc-600 space-y-4 dark:bg-gradient-to-b from-zinc-600 to-gray-500">
                      <li className={"mt-0"}><Link href={"/"} className={"w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>Chainqt3</Link></li>
                      <li><Link href={links.crypto_app} className={"w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>CryptoApp</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/about"
                            className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>About</Link>
                  </li>
                  <li><Link href="/contact"
                            className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>Contact</Link>
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
          <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
          <IconHeader kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"}/>
          <IconHeader kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"}/>
          <IconHeader kind={"linkedin"} href={links.linkedin} tooltip={"LinkedIn"} _blank={"_blank"}/>
        </div>
      </div>
    </header>
  )
}

export default Header;
