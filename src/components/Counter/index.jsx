import React, { useEffect, useState } from 'react';
import Time from './Time';
import './style.css';

const Counter = () => {
  const [counter, setCounter] = useState({
    hour: 10,
    minute: 0,
    second: 0,
  });

  const tick = () => {
    if (counter.second > 0) {
      setCounter({ ...counter, second: counter.second - 1 });
    }

    if (counter.second === 0 && counter.minute > 0) {
      setCounter({ ...counter, minute: counter.minute - 1, second: 59 });
    }

    if (counter.second === 0 && counter.minute === 0 && counter.hour > 0) {
      setCounter({
        ...counter,
        hour: counter.hour - 1,
        minute: 59,
        second: 59,
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className='flex flex-col sm:flex-row gap-8'>
      {Object.keys(counter).map((key) =>
          <Time key={key} time={counter[key]} type={key} setTime={setCounter} /> 
      )}
    </div>
  );
};

export default Counter;
