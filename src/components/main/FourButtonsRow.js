import React from 'react';

const FourButtonsRow = () => {
  const buttonWidth = 240.2; // Width of each button in pixels
  const padding = 9.83 * 2; // Total horizontal padding in pixels

  const totalButtonWidth = buttonWidth + padding; // Total width of each button including padding

  return (
    <div className="flex justify-between items-center" style={{ width: '100%' }}>
      <button className="w-full h-full text-white border rounded-full bg-customCyan text-lg " style={{ width: `${totalButtonWidth}px`, padding: '9.83px 23.6px' , borderRadius:'' }}>+ Create Report</button>
      <button className="w-full h-full border rounded-full text-lg hover:text-customCyan" style={{ width: `${totalButtonWidth}px`, padding: '9.83px 23.6px' }}>Share this dashboard</button>
      <button className="w-full h-full border rounded-full text-lg hover:text-customCyan" style={{ width: `${totalButtonWidth}px`, padding: '9.83px 23.6px' }}>Select Duration</button>
      <button className="w-full h-full border rounded-full text-lg hover:text-customCyan" style={{ width: `${totalButtonWidth}px`, padding: '9.83px 23.6px' }}>Compare with Duration</button>
    </div>
  );
};

export default FourButtonsRow;



