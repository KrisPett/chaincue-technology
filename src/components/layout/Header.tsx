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
              <div className="navbar-center hidden lg:flex">
                <ul className=" flex px-1">
                  <li>
                    <div className="dropdown dropdown-hover dropdown-bottom">
                      <label tabIndex={0}
                             onClick={() => router.push("projects")}
                             className="btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500">
                        Projects
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24">
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                        </svg>
                      </label>
                      <ul tabIndex={0}
                          className="dropdown-content menu rounded-lg p-4 bg-zinc-300 dark:bg-zinc-600 space-y-4 dark:bg-gradient-to-b from-zinc-600 to-gray-500">
                        <li className={"mt-0"}>
                          <Link href={links.chain_music}
                                className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                            ChainMusic
                          </Link>
                        </li>
                        <li>
                          <Link href={links.crypto_app}
                                className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                            CryptoApp
                          </Link>
                        </li>
                        <li>
                          <Link href={links.chainbot}
                                className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                            AI | ChainBot
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/*<li><Link href="/about"*/}
                  {/*          className={"btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>About*/}
                  {/*  me</Link>*/}
                  {/*</li>*/}
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
            <div className="dropdown dropdown-hover dropdown-end lg:hidden">
              <label tabIndex={0}
                     className="btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </label>
              <ul tabIndex={0}
                  className="dropdown-content menu rounded-lg p-4 bg-zinc-100 dark:bg-zinc-600 space-y-4 dark:bg-gradient-to-b from-zinc-600 to-gray-500">
                <li className={"mt-0"}><Link href={links.chain_music}
                                             className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>ChainMusic</Link>
                </li>
                <li><Link href={links.crypto_app}
                          className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                  CryptoApp
                </Link>
                </li>
                <li>
                  <Link href={links.chainbot}
                        className={"xxs:w-40 xs:w-80 h-20 btn btn-ghost text-gray-600 dark:text-gray-200 hover:text-orange-800 dark:hover:text-orange-500"}>
                    AI | ChainBot
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"hidden xl:flex space-x-2"}>
            <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
            <IconHeader kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"}/>
            <IconHeader kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"}/>
            <IconHeader kind={"youtube"} href={links.youtube} tooltip={"Youtube"} _blank={"_blank"}/>
            <IconHeader kind={"soundcloud"} href={links.soundcloud} tooltip={"Soundcloud"} _blank={"_blank"}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
