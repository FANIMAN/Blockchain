'use client';

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Description from '../components/Description';
import Section from '../components/Section';
import Footer from '../components/Footer';

type Asset = {
  id: number;
  name: string;
  value: string;
  description: string;
};

const HomePage = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await fetch('/api/assets');
      const data: Asset[] = await response.json();
      setAssets(data);
    };

    fetchAssets();
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-900 text-white bg-cover bg-center"
      style={{ backgroundImage: 'url(/BG.png)' }}
    >
      <div className='flex flex-col'>

      </div>
      <Header />
      <div className=''>
      <Description/>
      </div>
  
      <div className='flex flex-row justify-center items-center mt-60 md:mt-[450px] px-2 md:px-0'>
        <Section />
      </div>

      <div className='flex flex-row justify-center items-center mt-24 px-2 md:px-0'>
        <Footer />
      </div>

      {/* <div className="p-10 bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold">Assets</h1>
        <ul>
          {assets.map((asset) => (
            <li key={asset.id} className="mt-4">
              <h2 className="text-xl">{asset.name}</h2>
              <p>{asset.description}</p>
              <p>Value: {asset.value}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default HomePage;



