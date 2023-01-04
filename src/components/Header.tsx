import React from 'react';
import Image from 'next/image'
import ChainLogoWhite from "../assets/image/chaincue-logo-crop1-white.png";
import SocialIcon from "./SocialIcon";
import IconHeader from "./IconHeader";
import Drawer from "./Drawer";
import ThemeSwitch2 from "./ThemeSwitch2";
import ThemeSwitch1 from "./ThemeSwitch1";

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
          <ThemeSwitch1/>
        </div>
      </div>
      {/*<div className="btn-group">*/}
      {/*  <button className="btn glass">Glass button</button>*/}
      {/*  <button className="btn btn-outline btn-info">Info</button>*/}
      {/*  <button className="btn btn-outline btn-success">Success</button>*/}
      {/*  <button className="btn btn-outline btn-warning">Warning</button>*/}
      {/*  <button className="btn btn-outline btn-error">Error</button>*/}
      {/*</div>*/}
      <Drawer/>
    </header>
  )
}

export default Header;
