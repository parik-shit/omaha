import React from 'react';

const SidebarButton = ({ text, icon, onClick, isActive }) => {
  const buttonStyles = {
    width: '236.44px',
    height: '62.22px',
    padding: '0px 22.22px',
    gap: '15.11px',
    borderRadius: '17.78px 17.78px 17.78px 17.78px',
    opacity: '0px',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyles}
      className={`flex items-center justify-start text-left text-gray-200 hover:text-gray-300 hover:bg-customBlue ${
        isActive ? 'font-bold' : ''
      } py-3 px-4 w-full`}
    >
      {icon && (
        <img src={icon} alt={text} className="w-6 h-6 mr-2" />
      )}
      {text}
    </button>
  );
};

export default SidebarButton;
