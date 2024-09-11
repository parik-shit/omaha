import React from 'react';

const IconsRow = () => {
  return (
    <div className="flex items-center space-x-2 " style={{ width: '175px' }}>
      <img
        src={`${process.env.PUBLIC_URL}/icons/bell.svg`}
        alt="Bell Icon"
        style = {{width: '31.67px',height:'31.67px' , borderRadius: '10.38px'}}
        className=" shadow-md "
      />
      <img
        src={`${process.env.PUBLIC_URL}/icons/chat.svg`}
        alt="Chat Icon"
        style = {{width: '31.67px',height:'31.67px' , borderRadius: '10.38px'}}
        className=" shadow-md "
      />
      <img
        src={`${process.env.PUBLIC_URL}/icons/settings_2.svg`}
        alt="Settings Icon"
        style = {{width: '31.67px',height:'31.67px' , borderRadius: '10.38px'}}
        className=" shadow-md "
      />
      <img
        src={`${process.env.PUBLIC_URL}/icons/pfp.svg`}
        alt="Profile Icon"
       style = {{width: '31.67px',height:'31.67px' , borderRadius: '10.38px'}}
        className=" shadow-md "
      />
    </div>
  );
};

export default IconsRow;
