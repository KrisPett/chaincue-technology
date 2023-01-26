import React from 'react';
import Image from "next/image";
import IconHeader from "../layout/IconHeader";
import {links} from "../common/Links";
import AboutButton from "./AboutButton";
import {useRouter} from 'next/navigation';

const AboutView = () => {
  const router = useRouter();
  return (
    <div className={"flex flex-col"}>
      <section className={"flex justify-center bg-zinc-200 dark:bg-zinc-700 h-144"}>
        <div className={"flex flex-col md:flex-row h-144 w-10/12"}>
          <div className={"flex flex-col w-full justify-center"}>
            <p className={"text-xl md:text-4xl xxs:text-center md:text-start mt-5"}>Hello, my name is Kristoffer, a Full
              Stack Developer</p>
            <div className={"mt-5"}>
              <AboutButton onClick={() => router.push("contact")} title={"Email me"}/>
            </div>
            <div className={"hidden md:flex space-x-2 mt-5"}>
              <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"}/>
              <IconHeader kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"}/>
              <IconHeader kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"}/>
              <IconHeader kind={"linkedin"} href={links.linkedin} tooltip={"LinkedIn"} _blank={"_blank"}/>
            </div>
          </div>
          <div className={"w-full flex xxs:justify-center items-center md:justify-end"}>
            <div className={"rounded-4xl w-12/12"}>
              <Image
                src={"https://s3.amazonaws.com/chaincuet.com.backend/linkedin.jpg"}
                width={"100"} height={"100"}
                alt={"linkedin"}
                className={"rounded-4xl xxs:w-72 lg:w-96 md:m-10"}/>
            </div>
          </div>
        </div>
      </section>

      <section className={"flex justify-center bg-zinc-300 dark:bg-zinc-600 md:h-144"}>
        <div className={"flex flex-col md:flex-row md:h-144 w-10/12"}>
          <div className={"flex xxs:flex-col md:flex-row w-full justify-center md:items-center"}>
            <div className={"flex flex-col md:w-8/12"}>
              <p className={"text-2xl md:text-4xl"}>My Background</p>
              <p className={"text-xl mt-5 leading-10"}>
                I am an experienced developer with a background in music production and a passion
                for game development. My interest in programming and blockchain technology has led me to specialize in
                full-stack development and smart contract development. My skills and experience have been honed
                through a
                variety of projects, and I am eager to continue my professional growth by taking on new challenges.
              </p>
            </div>
            <div className={"flex flex-col md:w-4/12 md:ml-40 xxs:mt-10 mt-0"}>
              <p className={"text-4xl"}>Skills</p>
              <ul className={"list-none mb-10"}>
                <li className={"text-lg mt-2"}>Leadership</li>
                <li className={"text-lg"}>Communication</li>
                <li className={"text-lg"}>Critical thinkning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={"flex justify-center bg-zinc-200 dark:bg-zinc-700 md:h-144"}>
        <div className={"flex flex-col md:flex-row md:h-144 w-10/12"}>
          <div className={"flex flex-col w-full justify-center  "}>
            <div className={"flex xxs:flex-col md:flex-row md:w-12/12"}>
              <div className={"flex md:w-6/12 mt-5"}>
                <p className={"text-4xl md:text-4xl"}>Work Experience</p>
              </div>
              <div className={"flex flex-col md:w-6/12 mt-5"}>
                <p className={"text-2xl"}>Fullstack Developer</p>
                <p className={"text-2xl mt-2"}>Sensera / Aug 2022 - Present</p>
                <p className={"text-2xl leading-10 mt-5"}>As a full stack developer and technical lead at Sensera, I was
                  responsible for
                  leading the
                  development of an education platform, utilizing my expertise in various technologies to drive the
                  project to success.</p>
              </div>
            </div>
            <div className={"flex xxs:flex-col md:flex-row md:w-12/12 mt-5"}>
              <div className={"flex w-6/12 "}>
                <p className={"text-4xl md:text-4xl"}>Education</p>
              </div>
              <div className={"flex flex-col md:w-6/12"}>
                <p className={"text-2xl mt-5"}>EC Utbildning - Stockholm</p>
                <p className={"text-2xl mt-2"}>Java Devloper, Full Stack / 2020 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutView;
