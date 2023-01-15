import React from 'react';

interface IButton {
  title: string;
}

const Button = ({title}: IButton) => {
  return (
    <button
      className="btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
          text-gray-900 rounded-lg group bg-gradient-to-r from-orange-900 to-orange-500 group-hover:from-pink-500
          group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
  <span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-violet-100 rounded-md group-hover:bg-opacity-0">
     {title}
  </span>
    </button>
  );
};

export default Button;
