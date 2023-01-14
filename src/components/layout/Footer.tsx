import React from 'react';
import SocialIcon from "./SocialIcon";


const Footer = () => {

  const links = {
    github: "https://github.com/KQT3",
    gitlab: "https://gitlab.com/KQT3",
    twitter: "https://twitter.com/chaincue",
    linkedin: "https://www.linkedin.com/in/kristoffer-pettersson3/"
  }

  return (
    <footer>
      <div className={"mt-16 flex flex-col items-center"}>
        <div className={"mb-3 flex space-x-4"}>
          <SocialIcon kind={"github"} href={links.github} />
          <SocialIcon kind={"gitlab"} href={links.gitlab}/>
          <SocialIcon kind={"twitter"} href={links.twitter} />
          <SocialIcon kind={"linkedin"} href={links.linkedin} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
