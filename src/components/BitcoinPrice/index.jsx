import { useState, useEffect } from 'react';

const API = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const REFRESH_TIME = 1000 * 60;

const BitcoinPrice = () => {
  const [prices, setPrices] = useState(undefined);
  const [animation, setAnimation] = useState(false);

  const priceSymbol = (type) => {
    const symbols = {
      USD: '$',
      GBP: '£',
      EUR: '€',
    };

    return symbols[type];
  };

  const fetchPrices = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setPrices(data.bpi);
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      fetchPrices();
      setAnimation(true);
      timeout = setTimeout(() => {
        setAnimation(false);
      }, 5600);
    }, REFRESH_TIME);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='w-11/12 max-w-sm font-bold bg-gray-100 shadow-md rounded-lg p-4 mt-4 sm:mt-0 flex flex-col items-center justify-between'>
      <h3 className='text-2xl font-bold mb-4 text-center'>
        Current Prices Of Bitcoin
      </h3>
      {prices && (
        <div className='w-full max-w-[192px] space-y-1'>
          {Object.keys(prices).map((key) => (
            <div
              key={key}
              className='w-full text-lg flex justify-around items-center text-left'
            >
              <div className='flex-1'>{key}: </div>
              <div
                className={`${animation ? 'animate-pulse' : ''} flex-[2_2_0%]`}
              >
                {priceSymbol(key)}
                {prices[key].rate}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
