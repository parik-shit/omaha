import React from 'react';

const CardList2 = () => {
  const cards = [
   
   
    {
      color: 'bg-white',
      name: 'On Time',
      gain: 'Completed Transactions',
      capital: 'Total Iterations',
      new_field: '% Iterations Done',
      data_1: '',
      data_2: '',
      data_3: '',
      data_4: '',
      
    },
    {
      color: 'bg-white',
      name: 'On Scope',
      gain: 'Story points done',
      capital: 'Total Story Points',
      new_field: '% Stories Done'
    },
    {
      color: 'bg-white',
      name: 'On Velocity',
      gain: 'Average Velocity',
      capital: 'Required Velocity',
      new_field: ''
    },
   
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {cards.map((card, index) => (
        <div key={index} className={`${card.color} border shadow-md rounded-xl h-full `} style={{width:"400px"}}>
          <div className="flex flex-col mt-3 ml-6">
            <p className="text-xl font-semibold mt-10">{card.name}</p>
            <div className="flex flex-col mt-2">
              <p className="text-md "> {card.gain}</p>
              <p className="text-md mt-2">{card.capital}</p>
              <p className="text-md mt-2">{card.new_field}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList2;
