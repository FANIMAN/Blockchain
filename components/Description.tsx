'use client';

import React from 'react';

const Description = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center px-4 mt-10 md:mt-0 md:px-0'>
            <div className="relative md:absolute flex flex-col justify-center items-center gap-7" style={{ width: '100%', maxWidth: '777px', height: 'auto', top: '160px' }}>
                <h2 className="text-center text-4xl md:text-6xl mt-0 md:mt-12" style={{ width: '100%', maxWidth: '777px', fontFamily: 'Roboto', fontWeight: 400, color: '#FFFFFF' }}>
                    Easy send and Request Crypto.
                </h2>
                <p className="text-center text-base md:text-xl" style={{ width: '100%', maxWidth: '557px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px', color: '#FFFFFF' }}>
                    Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
                </p>
            </div>
        </div>
    );
};

export default Description;
