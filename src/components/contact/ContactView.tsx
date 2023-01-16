import React, {useEffect} from 'react';
import dynamic from 'next/dynamic';
import Loading from "./Loading";
import Button from "../home/Button";

const ContactView = () => {

  const GlobeSpin = dynamic(() => import('./GlobeSpin'), {
    ssr: false,
    loading: () => <div className={"flex items-center justify-center w-full"}><Loading/></div>,
  });

  return (
    <div className={"flex flex-row justify-center"}>
      <div className={"flex justify-end w-6/12 border-blue-800 my-32"}>
        <div className={"flex flex-col w-6/12"}>
          <p className={"text-4xl"}>Contacts</p>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-gray-100">Name</span>
            </label>
            <input type="text" placeholder="Type here"
                   className="input input-bordered text-gray-100 bg-zinc-600 placeholder-neutral-content/70"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-100">Your email*</span>
            </label>
            <input type="text" placeholder="Type here"
                   className="input input-bordered text-gray-100 bg-zinc-600 placeholder-neutral-content/70"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-100">Message*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-40 text-gray-100 bg-zinc-600 placeholder-neutral-content/70"
              placeholder="Type your message"></textarea>
          </div>
          <Button title={"Send Message"}/>
        </div>
      </div>
      <div className={"flex flex-1"}>
        <GlobeSpin/>
      </div>
    </div>
  )
}

export default ContactView;
