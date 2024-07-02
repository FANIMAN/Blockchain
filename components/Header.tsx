'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="relative w-full h-[70px] flex flex-col md:flex-row">
      {/* Logo Section */}
      <div className="flex justify-center md:absolute md:left-[130px] md:top-[50%] md:transform md:-translate-y-1/2 items-center py-2 md:py-0">
        <div className="relative w-[193px] h-[25px]">
          <img
            src="/BlockChain.png"
            alt="BlockChain"
            className="absolute"
            style={{
              width: '187px',
              height: '14.03px',
              left: '3px',
              top: '5.99px',
            }}
          />            
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col mt-10 md:mt-0 md:flex-row md:absolute md:left-[600px] top-0 justify-center items-center w-full md:w-[800px] h-[70px]">
        <div className="flex items-center justify-center w-full md:w-[93px] h-full px-5 py-2 md:py-0">
          <span className="text-white">Exchange</span>
        </div>
        <div className="flex items-center justify-center w-full md:w-[192px] h-full px-5 py-2 md:py-0">
          <span className="text-white">Last Transactions</span>
        </div>
        <div className="flex items-center justify-center w-full md:w-[138px] h-full px-5 py-2 md:py-0">
          <span className="text-white">Invite Friend</span>
        </div>
        <div className="flex items-center justify-center w-full md:w-[121px] h-full px-5 py-2 md:py-0">
          <span className="text-white">Notifications</span>
        </div>
      </div>

      {/* Authentication Section */}
      <div className="flex justify-center md:absolute md:right-[130px] top-[17px] gap-4 mt-12 md:mt-0">
        <div className="flex items-center justify-center w-[64px] h-[36px] border border-[#9945FF] rounded-[8px_0px] backdrop-blur-[2px]">
          <span className="text-white">LOG IN</span>
        </div>
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-[#9945FF] rounded-[8px_0px] backdrop-blur-[2px]">
          <span className="text-white">SIGN UP</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
