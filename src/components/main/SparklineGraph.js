import React from 'react';

const CardList = () => {
  const cards = [
    {
      color: 'bg-card_1',
      name: 'Efficiency',
      gain: '$100',
      capital: '$1000'
    },
    {
      color: 'blue',
      name: 'Time To Market',
      gain: '$200',
      capital: '$1500'
    },
    {
      color: 'bg-card_3',
      name: 'Tech Debt',
      gain: '$150',
      capital: '$1200'
    },
    {
      color: 'bg-card_4',
      name: 'Predictability',
      gain: '$300',
      capital: '$2000'
    }
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {cards.map((card, index) => (
        <div key={index} className={`${card.color} border shadow-md rounded-xl h-40 w-60`}>
          <div className="flex flex-col mt-3 ml-5">
            <p className="text-md">{card.name}</p>
            <div className="flex flex-col mt-2">
              <p className="text-3xl font-semibold"> {card.gain}</p>
              <p className="text-sm mt-10">Capital: {card.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
