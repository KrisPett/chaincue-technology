import React, {useState} from 'react';
import dynamic from 'next/dynamic';

interface IForm {
  name: string;
  email: string;
  message: string;
}

const GlobeSpin = dynamic(() => import('./GlobeSpin'), {
  ssr: false,
  loading: () => <div className={"flex items-center justify-center w-full"}>{/*<Loading/>*/}</div>,
})

const ContactView = () => {
  const [form, setForm] = useState<IForm>({name: '', email: '', message: ''})

  const onTextName = (value: string) => {
    setForm({...form, name: value})
  }

  const onTextEmail = (value: string) => {
    setForm({...form, email: value})
  }

  const onTextMessage = (value: string) => {
    setForm({...form, message: value})
  }

  const onClickButton = () => {
    console.log(form)
  }

  return (
    <div className={"flex flex-row"}>
      <div
        className={"flex lg:justify-end xl:justify-end xxs:justify-center xxs:w-full md:w-6/12 xl:w-6/12 border-blue-500 my-32"}>
        <div className={"flex flex-col xxs:w-10/12 xl:w-6/12"}>
          <p className={"text-4xl text-gray-800 dark:text-gray-400 mb-5"}>Contacts</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-100">Name</span>
            </label>
            <input type="text" placeholder="Type here"
                   onChange={e => onTextName(e.target.value)}
                   className="input input-bordered focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:focus-visible:ring-offset-orange-600
                    text-gray-800 bg-zinc-200 dark:text-gray-100 dark:bg-zinc-600 dark:placeholder-neutral-content/70"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-100">Your email*</span>
            </label>
            <input type="text" placeholder="Type here"
                   onChange={e => onTextEmail(e.target.value)}
                   className="input input-bordered focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:focus-visible:ring-offset-orange-600
                    text-gray-800 bg-zinc-200 dark:text-gray-100 dark:bg-zinc-600 dark:placeholder-neutral-content/70"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-100">Message*</span>
            </label>
            <textarea
              onChange={e => onTextMessage(e.target.value)}
              className="textarea textarea-bordered h-40
              focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:focus-visible:ring-offset-orange-600
              text-gray-800 bg-zinc-200 dark:text-gray-100 dark:bg-zinc-600 dark:placeholder-neutral-content/70"
              placeholder="Type your message"></textarea>
          </div>
          <button
            onClick={() => onClickButton()}
            className="btn relative inline-flex items-center justify-center my-3 xxs:w-full md:w-fit p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tr from-zinc-300 to-orange-300 group-hover:to-orange-400 hover:text-gray-900 text-gray-800 dark:bg-gradient-to-tr dark:from-zinc-500 dark:to-orange-600 dark:group-hover:to-orange-400 dark:hover:text-white dark:text-white ">
            <span
              className="relative px-5 py-2.5 xxs:w-full md:w-fit transition-all ease-in duration-75 bg-zinc-200 dark:bg-zinc-700 rounded-md group-hover:bg-opacity-0">
              Send Message
            </span>
          </button>
        </div>
      </div>
      <div className={"flex flex-1 xxs:hidden md:block"}>
        <GlobeSpin/>
      </div>
    </div>
  )
}

export default ContactView;
