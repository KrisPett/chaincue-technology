import React from 'react';
import IconHeader from "./IconHeader";

const Footer = () => {

  const links = {
    github: "https://github.com/KQT3",
    gitlab: "https://gitlab.com/KQT3",
    twitter: "https://twitter.com/chaincue",
    linkedin: "https://www.linkedin.com/in/kristoffer-pettersson3/"
  }

  return (
    <footer className="footer p-5 flex justify-center border-t-2 border-zinc-300 dark:border-zinc-600">
      <div className={"w-4/6 flex xxs:flex-col sm:flex-row justify-evenly items-center"}>
        <div className={"flex flex-row w-full justify-evenly"}>
          <div className={"flex flex-col"}>
            <span className="footer-title">Projects</span>
            <a className="link link-hover">Chain Music</a>
            <a className="link link-hover">Crypto App</a>
          </div>
          <div className={"flex flex-col"}>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </div>
        </div>
        <div className={"mt-3"}>
          <span className="footer-title">Social</span>
          <div className={"mb-3 mt-3 flex xxs:space-x-2 xs:space-x-4"}>
            <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
            <IconHeader kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"}/>
            <IconHeader kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"}/>
            <IconHeader kind={"linkedin"} href={links.linkedin} tooltip={"LinkedIn"} _blank={"_blank"}/>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
