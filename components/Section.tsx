'use client';

import React, { useEffect, useState } from 'react';

type Asset = {
  id: string;
  name: string;
  image: string;
  lastTrade: number;
  percent24h: string;
  change24h: string;
};

const Sectionn = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    fetch('/api/assets')
      .then(response => response.json())
      .then(data => setAssets(data));
  }, []);

  return (
    <div className="box-border w-full md:w-[1180px] h-auto bg-black bg-opacity-80 border border-[#464646] backdrop-blur-md rounded-[10px] p-4">
      <div className="w-full overflow-x-auto">
        <table className='min-w-[600px] w-full text-left text-white'>
          <thead>
            <tr>
              <th className="px-4 py-2">ASSETS</th>
              <th className="px-4 py-2">LAST TRADE</th>
              <th className="px-4 py-2">24H %</th>
              <th className="px-4 py-2">24H CHANGE</th>
              <th className="px-4 py-2 text-right text-[#3980FF]">MORE &gt;</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset.id} className="my-4">
                <td className="px-4 py-4 flex items-center gap-2">
                  <img className='w-10 h-10' src={`/images/${asset.image}`} alt={asset.name} />
                  <span>{asset.name}</span>
                </td>
                <td className="px-4 py-2">${asset.lastTrade.toLocaleString()}</td>
                <td className="px-4 py-2" style={{ color: asset.percent24h.startsWith('-') ? '#FF5454' : '#6DFF8B' }}>
                  {asset.percent24h}
                </td>
                <td className="px-4 py-2" style={{ color: asset.change24h.startsWith('-') ? '#FF5454' : '#6DFF8B' }}>
                  ${asset.change24h}
                </td>
                <td className="px-4 py-2 text-right">
                  <button className="bg-green-500 text-green-900 px-4 py-1 rounded-md">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sectionn;
