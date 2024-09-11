import React from 'react';
import SearchBar from './SearchBar';
import IconsRow from './IconsRow';
import FourButtonsRow from './FourButtonsRow';
import CardList from './CardList';
import CardList2 from './CardLists';
import FakeTable from './FakeTable';

const MainComponent = () => {
  return (
    <div className="flex flex-col  h-screen   items-center ">
      {/* add border here */}
      <div className=" w-full max-w-screen-xl mx-auto  flex justify-start items-center mt-12 h-10">
        {/* Content of the div */}
        <SearchBar />
        <div className="ml-auto">
          <IconsRow />
        </div>
      </div>
      {/* Spacer */}
      {/* add border here */}
      <div className="w-full max-w-screen-xl mx-auto  flex justify-start items-center mt-12 h-10"><FourButtonsRow/> </div>
      {/* add border here */}
      <div className="w-full max-w-screen-xl   flex  mt-12 h-40"><CardList/></div>
      <div className="w-full max-w-screen-xl  border flex  mt-12 " style={{height: '250px'}}><CardList2/></div>
      <div className="w-full max-w-screen-xl  border flex  mt-12 " style={{height: '250px'}}><FakeTable/></div>

    </div>
  );
};

export default MainComponent;
