import React from 'react';
import Button from "../home/Button";
import Image from "next/image";
import chainmusic from "../../assets/image/chanmusic.png";
import alter from "../../assets/image/26193889.png";
import {useRouter} from 'next/navigation';
import {links} from "../common/Links";

const ProjectsView = () => {
  const router = useRouter();
  return (
    <div className={""}>
      <div className={"justify-center flex flex-col space-y-5 max-w-7xl max-w-full"}>
        <div className="card card-side shadow-xl shadow-zinc-500/40 m-10 rounded-lg h-96 bg-zinc-300 dark:bg-zinc-700">
          <div className={"xxs:hidden md:block"}>
            <Image className={"rounded-l-lg w-full sm:max-w-prose h-full"} src={chainmusic} alt="chainmusic"/>
          </div>
          <div className="card-body">
            <h2 className="card-title">ChainMusic</h2>
            <p>Decentralized Crypto Music</p>
            <div className="card-actions justify-end">
              <Button title={"Go To Project"} onClick={() => router.replace(links.chain_music)}/>
            </div>
          </div>
        </div>

        <div className="card card-side shadow-xl shadow-zinc-500/40 m-10 rounded-lg h-96 bg-zinc-300 dark:bg-zinc-700">
          <div className={"xxs:hidden md:block"}>
            <Image className={"rounded-l-lg w-full sm:max-w-prose h-full"} src={alter} alt="chainmusic"/>
          </div>
          <div className="card-body">
            <h2 className="card-title">Crypto App</h2>
            <p>Decentralized Crypto App</p>
            <div className="card-actions justify-end">
              <Button title={"Go To Project"} onClick={() => router.replace(links.crypto_app)}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsView;
