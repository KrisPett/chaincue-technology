import React from 'react';
import Image from 'next/image'
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import SocialIcon from "./SocialIcon";
import IconHeader from "./IconHeader";
import Drawer from "./Drawer";
import ThemeSwitch from "./ThemeSwitch ";

const Header = () => {
  return (
    <header className={"bg-zinc-50 dark:bg-zinc-600"}>
      <div className={"flex items-center justify-between py-3"}>
        <div className={"ml-3"}>
          <a href={"#"}>
            {/*<img src={ChainLogoWhite} alt="" width={300} height={300}/>*/}
            <Image src={ChainLogoWhite} alt="" width={300} height={300} className="min-w-full"/>
          </a>
        </div>
        <div >
          {/*<ul className={"flex space-x-1"}>*/}
          {/*  <li>*/}
          {/*    <Link href="/">Projects</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link href="/about">About</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link href="/contact">Contact</Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
        <div className="flex flex-wrap justify-center gap-1 mr-2">
          <IconHeader kind={"github"} href={"#"}/>
          <IconHeader kind={"gitlab"} href={"#"}/>
          <IconHeader kind={"twitter"} href={"#"}/>
          <IconHeader kind={"linkedin"} href={"#"}/>
          <ThemeSwitch/>
        </div>
      </div>
      <Drawer/>
    </header>
  )
}

export default Header;
