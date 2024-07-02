import { NextApiRequest, NextApiResponse } from 'next'

type Asset = {
  id: number
  name: string
  value: string
  description: string
  image: string
  lastTrade: number
  percent24h: string
  change24h: string
}

const assets: Asset[] = [
  {
    id: 1,
    name: 'ALGO/USD',
    value: '1000',
    description: 'Description of ALGO',
    image: 'algo.png',
    lastTrade: 1.20,
    percent24h: '2.35%',
    change24h: '0.03'
  },
  {
    id: 2,
    name: 'BTC/USD',
    value: '1000',
    description: 'Description of BTC',
    image: 'btc.png',
    lastTrade: 63000,
    percent24h: '-2.21%',
    change24h: '-1426.18'
  },
  {
    id: 3,
    name: 'COMP/USD',
    value: '1000',
    description: 'Description of COMP',
    image: 'comp.png',
    lastTrade: 300,
    percent24h: '1.75%',
    change24h: '5.16'
  },
  {
    id: 4,
    name: 'DOGE/USD',
    value: '1000',
    description: 'Description of DOGE',
    image: 'doge.png',
    lastTrade: 0.25,
    percent24h: '-0.98%',
    change24h: '-0.0025'
  },
  {
    id: 5,
    name: 'DOT/USD',
    value: '1000',
    description: 'Description of DOT',
    image: 'dot.png',
    lastTrade: 25.50,
    percent24h: '3.45%',
    change24h: '0.85'
  },
  {
    id: 6,
    name: 'ETH/USD',
    value: '1000',
    description: 'Description of ETH',
    image: 'eth.png',
    lastTrade: 2500,
    percent24h: '3.45%',
    change24h: '100.00'
  },
  {
    id: 7,
    name: 'UNI/USD',
    value: '1000',
    description: 'Description of UNI',
    image: 'uni.png',
    lastTrade: 25,
    percent24h: '-1.21%',
    change24h: '-0.30'
  },
  {
    id: 8,
    name: 'CRYPTO/USD',
    value: '1000',
    description: 'Description of CRYPTO',
    image: 'crypto.png',
    lastTrade: 5.50,
    percent24h: '4.75%',
    change24h: '0.25'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Asset[]>) {
  res.status(200).json(assets)
}
