import React from 'react';
import Mail from '../assets/icons/mail.svg';
import Github from '../assets/icons/github.svg';
import Facebook from '../assets/icons/facebook.svg';
import Youtube from '../assets/icons/youtube.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Twitter from '../assets/icons/twitter.svg';
import Gitlab3 from '../assets/icons/gitlab.svg';

interface ISocialIcon {
  kind: string;
  href: string;
  tooltip: string;
}

const components: any = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  gitlab: Gitlab3,
}

const IconHeader = ({kind, href, tooltip}: ISocialIcon) => {
  const SocialSvg = components[kind];

  return (
    <div className={"group tooltip tooltip-bottom"} data-tip={tooltip}>
      <span className="sr-only">{kind}</span>
      <button className=" hover:fill-current btn btn-circle btn-outline text-orange-700 border border-orange-700 hover:bg-zinc-100 hover:text-white focus:ring-2
              focus:outline-none focus:ring-orange-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center
              dark:hover:bg-zinc-700 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800">
        <SocialSvg
          className={`group-hover:text-orange-600 dark:group-hover:text-orange-400 hover:fill-current fill-current text-gray-700 
          hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400 h-4 w-4`}/>
      </button>
    </div>
  )
}

export default IconHeader;
