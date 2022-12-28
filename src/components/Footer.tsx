import React from 'react';
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className={"mt-16 flex flex-col items-center"}>
        <div className={"mb-3 flex space-x-4"}>
          <SocialIcon kind={"github"} href={"#"} size={6}/>
          <SocialIcon kind={"facebook"} href={"#"} size={6}/>
          <SocialIcon kind={"youtube"} href={"#"} size={6}/>
          <SocialIcon kind={"linkedin"} href={"#"} size={6}/>
          <SocialIcon kind={"twitter"} href={"#"} size={6}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
