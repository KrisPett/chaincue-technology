import React from 'react';
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className={"mt-16 flex flex-col items-center"}>
        <div className={"mb-3 flex space-x-4"}>
          <SocialIcon kind={"github"} href={"#"} />
          <SocialIcon kind={"gitlab"} href={"#"}/>
          <SocialIcon kind={"twitter"} href={"#"} />
          <SocialIcon kind={"linkedin"} href={"#"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
