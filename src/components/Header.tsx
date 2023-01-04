import React from 'react';
import Image from 'next/image'
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import ChainLogoDark from "../assets/image/chaincue-logo-crop1-dark.png";
import IconHeader from "./IconHeader";
import ThemeSwitch1 from "./ThemeSwitch1";
import {useTheme} from "next-themes";
import Link from "next/link";

const Header = () => {
  const {theme, setTheme, resolvedTheme} = useTheme()

  return (
    <header className={"bg-zinc-50 dark:bg-zinc-600"}>
      <div className={"flex items-center justify-between py-3"}>
        <div className={"ml-3"}>
          <a href={"#"}>
            {theme === "dark" ?
              <Image src={ChainLogoDark} alt="" width={300} height={300} className="min-w-full" priority={true}/>
              : <Image src={ChainLogoWhite} alt="" width={300} height={300} className="min-w-full" priority={true}/>}
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
      {/*<div className="btn-group">*/}
      {/*  <button className="btn glass">Glass button</button>*/}
      {/*  <button className="btn btn-outline btn-info">Info</button>*/}
      {/*  <button className="btn btn-outline btn-success">Success</button>*/}
      {/*  <button className="btn btn-outline btn-warning">Warning</button>*/}
      {/*  <button className="btn btn-outline btn-error">Error</button>*/}
      {/*</div>*/}
      {/*<Drawer/>*/}
    </header>
  )
}

export default Header;
