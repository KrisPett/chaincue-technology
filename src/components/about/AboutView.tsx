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
              Text</p>
            <div className={"mt-10"}>
              <AboutButton onClick={() => router.push("contact")} title={"Email me"} />
            </div>
          </div>
          <div className={"w-full flex xxs:justify-center items-center md:justify-end mb-10 mt-10"}>
            <div className={"rounded-4xl w-12/12"}>
            </div>
          </div>
        </div>
      </section>

      <section className={"flex justify-center bg-zinc-300 dark:bg-zinc-600 md:min-h-144"}>
        <div className={"flex flex-col md:flex-row md:min-h-144 w-10/12"}>
          <div className={"flex xxs:flex-col md:flex-row w-full justify-center mt-5 mb-10"}>
            <div className={"flex flex-col md:w-8/12"}>
              <p className={"text-2xl md:text-4xl mt-10"}>Text</p>
              <p className={"text-xl mt-5 mb-5 leading-10"}>
                Text                <br /><br />
                Text                <br /><br />
                Text
              </p>
            </div>
            <div className={"flex flex-col md:w-4/12 md:ml-40 xxs:mt-10 mt-0"}>
              <p className={"text-4xl"}>Skills</p>
              <ul className={"list-none mb-10"}>
                <li className={"text-lg mt-2"}>Text</li>
                <li className={"text-lg"}>Text</li>
                <li className={"text-lg"}>Text</li>
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
                <p className={"text-4xl md:text-4xl"}>Text</p>
              </div>
              <div className={"flex flex-col md:w-6/12 mt-5"}>
                <p className={"text-2xl"}>Text</p>
                <p className={"text-2xl mt-2"}>Text</p>
                <p className={"text-xl leading-10 mt-5"}>
                Text
                </p>
              </div>
            </div>
            <div className={"flex xxs:flex-col md:flex-row md:w-12/12 lg:w-10/12 mt-5"}>
              <div className={"flex w-6/12 "}>
                <p className={"text-4xl md:text-4xl"}>Text</p>
              </div>
              <div className={"flex flex-col md:w-6/12"}>
                <p className={"text-2xl mt-5"}>Text</p>
                <p className={"text-2xl mt-2"}>Text</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutView;
