import React from 'react';
import Mail from '../../assets/icons/mail.svg';
import Github from '../../assets/icons/github.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Youtube from '../../assets/icons/youtube.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Gitlab from '../../assets/icons/gitlab.svg';

interface ISocialIcon {
  kind: string;
  href: string;
}

const components: Record<string, typeof Mail | typeof Github | typeof Facebook | typeof Youtube | typeof Linkedin | typeof Twitter> = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  gitlab: Gitlab,
}

const SocialIcon = ({kind, href}: ISocialIcon) => {
  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-3 w-3"}/>
    </a>
  );
};

export default SocialIcon;
