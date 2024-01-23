import React, { useState } from 'react';
import {
  HomeIcon,
  TableCellsIcon,
  PencilIcon,
  TagIcon,
  UserIcon,
  CogIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedMainItem, setSelectedMainItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleMainItemClick = (path, index) => {
    if (path) {
      navigate(path);
    }
    setSelectedMainItem(index);
    setSelectedSubItem(null);
    setSubmenuVisible(false);
  };

  const handleSubItemClick = (path, index) => {
    if (path) {
      navigate(path);
    }
    setSelectedSubItem(index);
  };

  const sidebarItems = [
    { icon: <HomeIcon />, text: 'Dashboard', link: '/dashboards' },
    { icon: <UserIcon />, text: 'User Management', link: '/users' },
    { icon: <TableCellsIcon />, text: 'Category', link: '/categories' },
    { icon: <PencilIcon />, text: 'Post', link: '/posts' },
    {
      icon: submenuVisible ? <ChevronDownIcon /> : <ChevronRightIcon />,
      text: 'SEO Management',
      submenu: [
        { icon: <GlobeAltIcon />, text: 'Category SEO', link: '/catgorypage/seo' },
        { icon: <LinkIcon />, text: 'Post SEO', link: '/postpage/seo' },
      ],
    },
    { icon: <CogIcon />, text: 'General Settings', link: '/GeneralSetting' },
  ];

  return (
    <div className={`bg-gray-800 text-white pt-8 ${sidebarVisible ? 'md:w-1/5 lg:w-1/6 xl:w-1/8' : 'w-18'}`}>
      <div className='flex mx-2 my-1 py-1'>
        <button
          className="block mx-4 pb-4 text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
        </button>
        {sidebarVisible && (
          <h1 className="text-2xl font-bold mx-4 pb-4">Blog</h1>
        )}
      </div>

      {sidebarItems.map((item, index) => (
        <div key={index} className="my-4 px-1">
          {item.submenu ? (
            <>
              <div
                className={`flex items-center cursor-pointer py-3 px-2 mx-2 my-1 ${submenuVisible && selectedMainItem === index ? 'text-white bg-gray-500' : 'text-gray-100 hover:text-white'}`}
                onClick={() => {
                  toggleSubmenu();
                  setSelectedMainItem(selectedMainItem === index && submenuVisible ? null : index);
                }}
              >
                {item.icon && React.cloneElement(item.icon, { className: 'w-5 h-5 mr-2 my-1' })}
                <span className={!sidebarVisible ? 'hidden' : ''}>{item.text}</span>
              </div>
              {submenuVisible && selectedMainItem === index && (
                <>
                  {item.submenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex items-center my-2 ml-8 cursor-pointer py-2 px-2 ${selectedSubItem === subIndex ? 'text-white bg-gray-500' : 'text-gray-100 hover:text-white'}`}
                      onClick={() => handleSubItemClick(subItem.link, subIndex)}
                    >
                      {subItem.icon && React.cloneElement(subItem.icon, { className: 'w-5 h-5 mr-2 my-1' })}
                      <span className={!sidebarVisible ? 'hidden' : ''}>{subItem.text}</span>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <div
              className={`flex items-center cursor-pointer py-3 px-4 ${selectedMainItem === index ? 'text-white bg-gray-500' : 'text-gray-100 hover:text-white'}`}
              onClick={() => handleMainItemClick(item.link, index)}
            >
              {item.icon && React.cloneElement(item.icon, { className: 'w-5 h-5 mr-2 ' })}
              <span className={!sidebarVisible ? 'hidden' : ''}>{item.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
