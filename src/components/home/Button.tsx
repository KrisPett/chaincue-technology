import React from 'react';

interface IButton {
  title: string;
}

const Button = ({title}: IButton) => {
  return (
    <button
      className="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
          text-gray-900 rounded-lg group bg-orange-600
           hover:text-zinc-200 hover:dark:text-white dark:text-zinc-200 dark:hover:bg-orange-700">
  <span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-r from-orange-900 to-orange-500 rounded-md group-hover:bg-opacity-0">
     {title}
  </span>
    </button>
  );
};

export default Button;
