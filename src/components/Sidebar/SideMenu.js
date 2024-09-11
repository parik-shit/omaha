import React from 'react';
import SidebarList from './SidebarList';
import styles from './logo.module.css'; // Import the CSS module

const SideMenu = () => {
  // Define the paths to the SVG icons using PUBLIC_URL
  const icons = {
    home: `${process.env.PUBLIC_URL}/icons/home.svg`,
    activities: `${process.env.PUBLIC_URL}/icons/activities.svg`,
    analytics: `${process.env.PUBLIC_URL}/icons/analytics.svg`,
    transformation: `${process.env.PUBLIC_URL}/icons/transformation.svg`,
    library: `${process.env.PUBLIC_URL}/icons/library.svg`,
    logout: `${process.env.PUBLIC_URL}/icons/logout.svg`, // Add logout icon path
    settings: `${process.env.PUBLIC_URL}/icons/settings.svg`, // Add settings icon path
    back: `${process.env.PUBLIC_URL}/icons/back.svg`, // Add settings icon path
    logo: `${process.env.PUBLIC_URL}/icons/logo.svg`, // Add settings icon path

  };

  const sidebarItems = [
    { text: 'Home', icon: icons.home },
    { text: 'Activities', icon: icons.activities },
    { text: 'Analytics', icon: icons.analytics },
    { text: 'Transformation', icon: icons.transformation },
    { text: 'Library', icon: icons.library },
  ];
  const sidebarBottomItems = [
 
    { text: 'Settings', icon: icons.settings },
    { text: 'Logout', icon: icons.logout},
  ];

  return (
    <div className="flex justify-center items-center h-full" style={{ width: '300px', padding: '17px' }}>
      <div className={`flex flex-col shadow-2xl h-full  bg-customCyan text-white w-full rounded-3xl items-center p-4 justify-center ${styles.logoContainer}`}>
        {/* Logo Container */}
        <div className={`flex items-center gap-10.67 ${styles.logoContent}`}>
          {/* Add your logo here */}
        </div>
        <div className='w-full flex justify-end pt-5'> {/* Added 'flex justify-end' to move the icon to the right */}
  <button>
    <img
      src={icons.back}
      alt="Settings"
      className="w-10 h-10 ml-2 " 
      style={{ marginBottom: '1px' }}
    />
  </button>
</div>

{/* middle changes  */}
{/* add border */}
        <div className="flex flex-col  w-full pt-5 mt-5 " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='w-full flex  justify-center items-center'>
  <img
    src={icons.logo}
    alt="Settings"
    className="w-12 h-12 mr-2"
    style={{ marginBottom: '1px' }}
  />
  <span className='font-semibold text-4xl'>Catalix</span>
</div>
{/* add border */}
    <div className=' mt-20'>
        <SidebarList items={sidebarItems} />
    </div>
</div> 
{/*  */}
{/* add border  */}
        <div className="mt-auto w-full flex flex-col items-center "> 
            
          <hr className="border-white w-full mb-4 " />
          <SidebarList items={sidebarBottomItems} />

        </div>
      </div>
    </div>
  );
};

export default SideMenu;
