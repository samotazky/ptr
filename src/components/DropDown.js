// Dropdown.js
import React from 'react';
import CountrySK from '../img/CountrySK.svg';
import ArrowDown from '../img/ArrowDown.svg';

const Dropdown = () => {
  return (
    <div className="w-[100px] h-12 justify-center items-center inline-flex">
    <div className="p-1 bg-white rounded-[10px] border border-zinc-800 justify-start items-center gap-[3px] inline-flex">
        <div className="w-14 h-10 justify-center items-center flex">
            <img className="w-14 h-10 rounded-10px shadow" src={CountrySK} />
        </div>
        <img className="w-[33px] h-6 relative" src={ArrowDown} />
    </div>
</div>
  );
};

export default Dropdown;
