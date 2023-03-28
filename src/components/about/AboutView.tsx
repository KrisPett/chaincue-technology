import React from 'react';
import Image from "next/image";
import IconHeader from "../layout/IconHeader";
import { links } from "../common/Links";
import AboutButton from "./AboutButton";
import { useRouter } from 'next/navigation';

const AboutView = () => {
  const router = useRouter();
  return (
    <div className={"flex flex-col"}>
      <section className={"flex justify-center bg-zinc-200 dark:bg-zinc-700 min-h-144"}>
        <div className={"flex flex-col md:flex-row min-h-144 w-10/12"}>
          <div className={"flex flex-col w-full justify-center"}>
            <p className={"text-xl md:text-4xl xxs:text-center md:text-start mt-5"}>
              Hello, my name is Kristoffer, a Full Stack Developer</p>
            <div className={"mt-10"}>
              <AboutButton onClick={() => router.push("contact")} title={"Email me"} />
            </div>
            <div className={"hidden md:flex space-x-2 mt-10"}>
              <IconHeader kind={"github"} href={links.github} tooltip={"Github"} _blank={"_blank"} />
              <IconHeader kind={"gitlab"} href={links.gitlab} tooltip={"Gitlab"} _blank={"_blank"} />
              <IconHeader kind={"twitter"} href={links.twitter} tooltip={"Twitter"} _blank={"_blank"} />
              <IconHeader kind={"linkedin"} href={links.linkedin} tooltip={"LinkedIn"} _blank={"_blank"} />
            </div>
          </div>
          <div className={"w-full flex xxs:justify-center items-center md:justify-end mb-10 mt-10"}>
            <div className={"rounded-4xl w-12/12"}>
              <img
                src={"https://images.chaincuet.com/linkedin-1000.jpg"}
                width={"100"} height={"100"}
                alt={"linkedin"}
                className={"rounded-4xl xxs:w-72 lg:w-96 md:m-10"} />
            </div>
          </div>
        </div>
      </section>

      <section className={"flex justify-center bg-zinc-300 dark:bg-zinc-600 md:min-h-144"}>
        <div className={"flex flex-col md:flex-row md:min-h-144 w-10/12"}>
          <div className={"flex xxs:flex-col md:flex-row w-full justify-center mt-5 mb-10"}>
            <div className={"flex flex-col md:w-8/12"}>
              <p className={"text-2xl md:text-4xl mt-10"}>My Background</p>
              <p className={"text-xl mt-5 mb-5 leading-10"}>
                I am an experienced developer with a background in music production and a passion for game development. My interest in programming and AI has led me to specialize in full-stack development, with a focus on building robust, scalable systems that incorporate AI and machine learning.
                <br /><br />
                Throughout my career, I have worked on a variety of projects that have allowed me to develop a deep understanding of web development for production, not just local development. I have experience working with a range of programming languages, frameworks, and tools, and I am well versed in the latest industry trends and best practices.
                <br /><br />
                Overall, my combination of technical expertise, creativity, and passion for AI and web development make me an excellent candidate for any project that requires cutting-edge solutions and a focus on production-ready web development.
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

      <section className={"flex justify-center bg-zinc-200 dark:bg-zinc-700 min-h-144"}>
        <div className={"flex flex-col md:flex-row md:w-10/12 w-10/12"}>
          <div className={"flex flex-col w-full justify-center  "}>
            <div className={"flex xxs:flex-col md:flex-row md:w-12/12 lg:w-10/12"}>
              <div className={"flex md:w-6/12 mt-5"}>
                <p className={"text-4xl md:text-4xl"}>Work Experience</p>
              </div>
              <div className={"flex flex-col md:w-6/12 mt-5"}>
                <p className={"text-2xl"}>Fullstack Developer</p>
                <p className={"text-2xl mt-2"}>Sensera / Aug 2022 - Present</p>
                <p className={"text-xl leading-10 mt-5"}>
                  As a full stack developer and technical lead at Sensera, I was responsible for leading the
                  development of an education platform, utilizing my expertise in various technologies to drive the
                  project to success.
                </p>
              </div>
            </div>
            <div className={"flex xxs:flex-col md:flex-row md:w-12/12 lg:w-10/12 mt-5"}>
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
