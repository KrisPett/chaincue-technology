import React from 'react';
import IconHeader from "./IconHeader";
import {links} from "../common/Links";
import Link from "next/link";
import IconFooter from "./IconFooter";

const Footer = () => {
  return (
    <footer className="footer p-5 flex justify-center border-t-2 border-zinc-300 dark:border-zinc-600">
      <div className={"w-4/6 flex xxs:flex-col sm:flex-row justify-evenly items-center"}>
        <div className={"flex flex-row w-full justify-evenly"}>
          <div className={"flex flex-col"}>
            <span className="footer-title">Projects</span>
            <Link href={links.chain_music} className="link link-hover">Chain Music</Link>
            <Link href={links.crypto_app} className="link link-hover">Crypto App</Link>
            <Link href={links.chainbot} className="link link-hover">AI | Chainbot App</Link>
          </div>
          <div className={"flex flex-col"}>
            <span className="footer-title">Company</span>
            <Link href={"about"} className="link link-hover">About Me</Link>
            <Link href={"contact"} className="link link-hover">Contact</Link>
          </div>
        </div>
        <div className={"mt-3"}>
          <span className="footer-title">Social</span>
          <div className={"mb-3 mt-3 flex xxs:space-x-2 xs:space-x-4"}>
            <IconFooter kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
            <IconFooter kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"}/>
            <IconFooter kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"}/>
            <IconFooter kind={"linkedin"} href={links.linkedin} tooltip={"LinkedIn"} _blank={"_blank"}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
