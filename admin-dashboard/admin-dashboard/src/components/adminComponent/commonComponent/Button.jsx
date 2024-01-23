import React from 'react';

import {PlusIcon,PencilIcon,AtSymbolIcon,XMarkIcon,PrinterIcon} from "@heroicons/react/24/outline";
import { ListBulletIcon } from '@heroicons/react/24/solid';

// Button component with icon and text
const Button = ({ label, onClick, type, size }) => {
  const buttonIcons = {
    add: <PlusIcon className="w-6 h-6" />,
    update: <PencilIcon className="w-6 h-6" />,
    activate: <AtSymbolIcon className="w-6 h-6" />,
    excel: <XMarkIcon className="w-6 h-6 mr-2" />,
    pdf: <PrinterIcon className="w-6 h-6 mr-2" />,
    list: <ListBulletIcon className="w-6 h-6 mr-2" />,
  };

  const buttonClasses = {
    
    add: 'bg-blue-500 transition-colors hover:bg-blue-600 hover:text-blue-500 border hover:bg-blue-600 hover:bg-white border-blue-600 hover:ease-in-out',
    update: 'bg-cyan-200 transition-colors hover:bg-blue-300 hover:text-cyan-200 border hover:bg-blue-300 hover:text-cyan-300 border-blue-300 hover:ease-in',
    activate: 'bg-lime-500 transition-colors  hover:bg-lime-600 hover:text-lime-500 border hover:bg-lime-600 hover:ease-in-out',
    excel: 'bg-green-500 transition-colors border border-green-500 hover:text-green-500 border hover:bg-green-600 hover:bg-white border-green-600 hover:ease-in-out',
    pdf: 'bg-red-500 transition-colors hover:text-red-500 border border-red-500 hover:bg-white border-red-600 hover:ease-in-out',
    list:'bg-yellow-500 transition-colors hover:text-yellow-500 border border-yellow-500 hover:bg-white border-yellow-600 hover:ease-in-out',
  };

  const buttonClass = buttonClasses[type] || 'bg-gray-500';

  const sizeClasses = {
    small: 'px-3 py-2 text-sm ',mid: 'px-6 py-2 text-md', big: 'px-8 py-2 text-base',
  };

  const sizeClass = sizeClasses[size] || 'px-4 py-2 text-base';

  return (
    <button
      className={`rounded-full flex items-center justify-center shadow transition-colors mx-2 text-white space-x-2 ${buttonClass} ${sizeClass}`}
      onClick={onClick} // Fix the typo here (onClick, not onclick)
    >
        {buttonIcons[type]}
        {label}
    </button>
  );
};

export default Button;
