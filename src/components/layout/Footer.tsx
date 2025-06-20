import React from 'react';
import IconHeader from "./IconHeader";
import {links} from "../common/Links";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-5 flex justify-center border-t-2 border-zinc-300 dark:border-zinc-600">
      <div className={"w-4/6 flex xxs:flex-col sm:flex-row justify-evenly items-center"}>
        <div className={"flex flex-row w-full"}>
          <div className={"flex flex-col"}>
            <span className="footer-title">Company</span>
            <Link href={"contact"} className="link link-hover">Contact</Link>
          </div>
        </div>
        <div className={"mt-3"}>
          <span className="footer-title">Social</span>
          <div className={"mb-3 mt-3 flex xxs:space-x-2 xs:space-x-4"}>
            <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
            <IconHeader kind={"x"} href={links.x} tooltip={"X"} _blank={"_blank"}/>
            <IconHeader kind={"youtube"} href={links.youtube} tooltip={"Youtube"} _blank={"_blank"}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
