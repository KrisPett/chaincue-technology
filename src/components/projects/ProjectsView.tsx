import React from 'react';
import Button from "../home/Button";
import Image from "next/image";
import alter from "../../assets/image/26193889.png";
import {useRouter} from 'next/navigation';
import {links} from "../common/Links";
import Link from "next/link";

const ProjectsView = () => {
  const router = useRouter();
  return (
      <div className={""}>
        <div className={"flex flex-col max-w-full gap-10 pt-10"}>
          <div
              className="card card-side shadow-xl shadow-zinc-500/40 ml-10 mr-10 rounded-lg h-96 bg-zinc-300 dark:bg-zinc-700">
            <div className={"xxs:hidden md:block"}>
              <Image className={"rounded-l-lg w-full sm:max-w-prose h-full"} width={"100"} height={"100"}
                     src={"https://images.chaincuet.com/logos/images/chanmusic.png"} alt="chainmusic"/>
            </div>
            <div className="card-body">
              <h2 className="card-title">ChainMusic</h2>
              <div>
                <p>Decentralized Crypto Music</p>
                <Link target={"_blank"} href={"https://gitlab.com/chainqt3/qt3-music/portals/qt3music-client"} className="link link-hover">https://gitlab.com/chainqt3/qt3-music/portals/qt3music-client</Link>
              </div>
              <div className="card-actions">
                <Button title={"Go To Project"} onClick={() => router.replace(links.chain_music)}/>
              </div>
            </div>
          </div>

          <div
              className="card card-side shadow-xl shadow-zinc-500/40 ml-10 mr-10 rounded-lg h-96 bg-zinc-300 dark:bg-zinc-700">
            <div className={"xxs:hidden md:block"}>
              <Image className={"rounded-l-lg w-full sm:max-w-prose h-full"} src={"https://images.chaincuet.com/logos/real-estate.png"} width={"100"} height={"100"} alt="chainmusic"/>
            </div>
            <div className="card-body">
              <h2 className="card-title">Chaincue Real Estate</h2>
              <div>
                <p>Buy Properties With Crypto</p>
                <Link target={"_blank"} href={"https://github.com/KrisPett/chaincue-real-estate"} className="link link-hover">https://github.com/KrisPett/chaincue-real-estate</Link>
              </div>
              <div className="card-actions">
                <Button title={"Go To Project"} onClick={() => router.replace(links.chaincue_real_estate)}/>
              </div>
            </div>
          </div>
          <div
              className="card card-side shadow-xl shadow-zinc-500/40 ml-10 mr-10 rounded-lg h-96 bg-zinc-300 dark:bg-zinc-700">
            <div className={"xxs:hidden md:block"}>
              <Image className={"rounded-l-lg w-full sm:max-w-prose h-full"} width={"100"} height={"100"}
                     src={"https://images.chaincuet.com/logos/chainbot.png"} alt="chainmusic"/>
            </div>
            <div className="card-body">
              <h2 className="card-title">ChainBots</h2>
              <div>
                <p>Collection of AI integration projects</p>
                <Link target={"_blank"} href={"https://github.com/KrisPett/chainbot"} className="link link-hover">https://github.com/KrisPett/chainbot</Link>
              </div>
              <div className="card-actions">
                <Button title={"Go To Project"} onClick={() => router.replace(links.chainbot)}/>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default ProjectsView;
