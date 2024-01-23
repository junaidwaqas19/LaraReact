import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { PencilIcon, TrashIcon, EyeIcon, ListBulletIcon } from "@heroicons/react/24/outline";

const LinkIcon = ({ onClick, type }) => {
  const buttonIcons = {
    edit: <PencilIcon className="w-4 h-4  text-green-400 hover:text-green-500" />,
    delete: <TrashIcon className="w-4 h-4  text-red-400 hover:text-red-500" />,
    view: <EyeIcon className="w-4 h-4  text-blue-400 hover:text-blue-500" />,
    list: <ListBulletIcon className="w-4 h-4 font-medium" />,
  };

  return (
    <Link  className="font-medium mx-1" onClick={onClick}>
      {buttonIcons[type]}
    </Link>
  );
};

export default LinkIcon;
