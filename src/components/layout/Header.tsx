import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import ChainLogoDark from "../../assets/image/chaincue-logo-crop1-dark.png";
import ChainLogoWhite from "../../assets/image/chaincue-logo-crop1-white.png";
import IconHeader from "./IconHeader";
import ThemeSwitch1 from "./ThemeSwitch1";
import {useTheme} from "next-themes";
import Link from "next/link";
import {links} from "../common/Links";
import {useRouter} from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const {theme, setTheme, resolvedTheme} = useTheme()
  const [isTheme, setIsTheme] = useState<string>();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    setIsTheme(theme);
  }, [theme])

  return (
    <header className={"bg-zinc-300 dark:bg-zinc-600 dark:bg-gradient-to-r from-zinc-600 to-gray-500"}>
      <div className={"flex items-center justify-between py-3"}>
        <div className={"flex"}>
          <div>
            <Link href={"/"} className="btn btn-ghost hover:bg-transparent">
              <Image src={isTheme === "light" ? ChainLogoWhite : ChainLogoDark} alt="" width={300} height={300}
                     className="min-w-full" priority={true}/>
            </Link>
          </div>
          <div>
            <ul className={"flex space-x-1"}>
              <div className="navbar-center">
                <ul className=" flex px-1">
                  <li><Link href="/contact"
                            className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>Contact</Link>
                  </li>
                  <li>
                    <Link href={links.wiki} target={"_blank"}
                          className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                      <div className={"flex items-center space-x-2"}>
                        <div>
                          Wiki
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mr-4">
          <div className={"flex flex-nowrap sm:flex-row-reverse"}>
            <div className={" flex mr-2"}>
              <ThemeSwitch1/>
            </div>
          </div>
          <div className={"hidden xl:flex space-x-2"}>
            <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
            <IconHeader kind={"x"} href={links.x} tooltip={"X"} _blank={"_blank"}/>
            <IconHeader kind={"youtube"} href={links.youtube} tooltip={"Youtube"} _blank={"_blank"}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
