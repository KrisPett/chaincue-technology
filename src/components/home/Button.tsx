import React from 'react';

interface IButton {
  title: string;
}

const ButtonAlternative = ({title}: IButton) => {
  return (
    <button
      className="btn relative inline-flex items-center justify-center xxs:w-full xs:w-fit p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
      text-gray-900 rounded-lg group
      bg-gradient-to-tr from-zinc-300 to-orange-300 group-hover:to-orange-400 hover:text-gray-900 text-gray-800
      dark:bg-gradient-to-tr dark:from-zinc-500 dark:to-orange-600 dark:group-hover:to-orange-400 dark:hover:text-white dark:text-white ">
  <span
    className="relative px-5 py-2.5 xxs:w-full xs:w-fit transition-all ease-in duration-75 bg-zinc-200 dark:bg-zinc-700 rounded-md group-hover:bg-opacity-0">
      {title}
  </span>
    </button>
  )
}

export default ButtonAlternative;
