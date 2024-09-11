import React from 'react';
import SidebarButton from './SidebarButton';

const SidebarList = ({ items }) => {
  return (
    <div className="flex-grow w-full">
      <ul className="mb-4 flex flex-col items-center justify-center">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <SidebarButton text={item.text} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarList;
