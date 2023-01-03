import React from 'react';
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className={"mt-16 flex flex-col items-center"}>
        <div className={"mb-3 flex space-x-4"}>
          <SocialIcon kind={"github"} href={"#"} />
          <SocialIcon kind={"facebook"} href={"#"}/>
          <SocialIcon kind={"youtube"} href={"#"} />
          <SocialIcon kind={"linkedin"} href={"#"} />
          <SocialIcon kind={"twitter"} href={"#"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
