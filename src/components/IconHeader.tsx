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

const IconHeader = ({kind, href}: ISocialIcon) => {
  const SocialSvg = components[kind];

  return (
    <div>

      {/*<button className="btn btn-circle">*/}
      {/*  <SocialSvg className={"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-4 w-4"}/>*/}
      {/*</button>*/}
      <span className="sr-only">{kind}</span>
      <button className="btn btn-circle btn-outline text-blue-700 border border-blue-700 hover:bg-zinc-100 hover:text-white focus:ring-2
              focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center
              dark:hover:bg-zinc-700 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800
              hover:text-blue-500 dark:hover:text-blue-400
              "
      >
        <SocialSvg className={"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-4 w-4"}/>
      </button>

      {/*<button type="button"*/}
      {/*        className="text-blue-700 border border-blue-700 hover:bg-zinc-700 hover:text-white focus:ring-4*/}
      {/*        focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex*/}
      {/*        items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">*/}
      {/*  <SocialSvg className={"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-4 w-4"}/>*/}
      {/*</button>*/}
    </div>
  );
};

export default IconHeader;
