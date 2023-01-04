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
        <div className={"ml-3"}>
          <a href={"#"}>
            <Image src={isTheme === "light" ? ChainLogoWhite : ChainLogoDark} alt="" width={300} height={300}
                   className="min-w-full" priority={true}/>
          </a>
        </div>
        <div>
          <ul className={"flex space-x-1"}>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mr-2">
          <div className={" flex mr-2"}>
            <ThemeSwitch1/>
          </div>
          <IconHeader kind={"github"} href={"#"}/>
          <IconHeader kind={"gitlab"} href={"#"}/>
          <IconHeader kind={"twitter"} href={"#"}/>
          <IconHeader kind={"linkedin"} href={"#"}/>
        </div>
      </div>
    </header>
  )
}

export default Header;
